// Professional experience start date (Noon E-Commerce, 03/2022 per resume).
const EXPERIENCE_START = new Date(2022, 2, 1);

export function getYearsExperience() {
  const now = new Date();
  let years = now.getFullYear() - EXPERIENCE_START.getFullYear();
  const anniversaryPassed =
    now.getMonth() > EXPERIENCE_START.getMonth() ||
    (now.getMonth() === EXPERIENCE_START.getMonth() &&
      now.getDate() >= EXPERIENCE_START.getDate());
  if (!anniversaryPassed) years -= 1;
  return years;
}
