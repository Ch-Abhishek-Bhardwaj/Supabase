function App() {
  return (
    <>
      <h1>To-Do using Supabase </h1>

      <form>
        <input type="text" placeholder="Enter a task" />
        <button type="submit">Add Task</button>
      </form>

      {/* // Display the list of tasks here */}
      <h2>Task list </h2>
    </>
  );
}

export default App;
