export function demoLogin() {
  // fake JWT token for demo mode
  const demoToken = "skillforge-demo-user";

  localStorage.setItem("token", demoToken);

  window.location.href = "/dashboard";
}
