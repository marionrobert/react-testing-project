# Projet d'initiation aux tests sur React avec Jest.

[Tutoriel de développement piloté par les tests – Comment tester vos applications JavaScript et ReactJS](https://www.freecodecamp.org/news/test-driven-development-tutorial-how-to-test-javascript-and-reactjs-app/#what-is-test-driven-development)

[Documentation JEST](https://jestjs.io/docs/getting-started#using-babel)


## Ajout de await waitFor sinon le test ne passait pas.
```javacsript
// Utilisez waitFor pour attendre que le titre soit mis à jour
await waitFor(() => {
  expect(screen.getByRole("heading")).toHaveTextContent(/a codesweetly project/i);
});
```
