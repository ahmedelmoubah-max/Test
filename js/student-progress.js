/* Student-scoped progress storage for the Deutsch A1 local prototype. */
(function () {
  const SESSION_KEY = 'deutsch_a1_session_v1';
  const RESULTS_KEY = 'deutsch_a1_results_v1';

  function readSession() {
    try { return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null'); }
    catch (e) { return null; }
  }

  function readResults() {
    try { return JSON.parse(localStorage.getItem(RESULTS_KEY) || '{}') || {}; }
    catch (e) { return {}; }
  }

  function storageKey(baseKey) {
    const session = readSession();
    const suffix = session && session.role === 'student' && session.id ? session.id : 'guest';
    return String(baseKey) + '::' + suffix;
  }

  function report(moduleId, title, completed, scores, totalExercises, scoreTotals) {
    const session = readSession();
    if (!session || session.role !== 'student' || !session.id) return;

    const completedMap = completed || {};
    const scoreMap = scores || {};
    const done = Object.keys(completedMap).filter(key => !!completedMap[key]).length;
    let points = 0;
    let maxPoints = 0;
    Object.keys(scoreMap).forEach(key => {
      const value = scoreMap[key];
      if (value && typeof value === 'object') {
        points += Number(value.correct) || 0;
        maxPoints += Number(value.total) || 0;
      } else {
        points += Number(value) || 0;
        maxPoints += Number((scoreTotals || {})[key]) || 0;
      }
    });
    const total = Number(totalExercises) || Object.keys(completedMap).length || 0;
    const percent = maxPoints > 0 ? Math.round(points / maxPoints * 100) : (total > 0 ? Math.round(done / total * 100) : 0);
    const all = readResults();
    if (!all[session.id]) all[session.id] = {};
    all[session.id][moduleId] = {
      moduleId,
      title,
      completedExercises: done,
      totalExercises: total,
      points,
      maxPoints,
      percent,
      scores: scoreMap,
      updatedAt: new Date().toISOString()
    };
    try { localStorage.setItem(RESULTS_KEY, JSON.stringify(all)); } catch (e) {}
  }

  window.DeutschA1Progress = { storageKey, report };
})();
