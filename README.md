Ajout de await waitFor sinon le test ne passait pas.
// Utilisez waitFor pour attendre que le titre soit mis à jour
await waitFor(() => {
  expect(screen.getByRole("heading")).toHaveTextContent(/a codesweetly project/i);
});
