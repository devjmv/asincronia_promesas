async function fetchPackage() {
  try {
    const response = await fetch('dataJson.json');
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Invalid JSON:', error);
  }
}

async function displayAllTitles() {
  const all = await fetchPackage();
  const tableBody = document.getElementById('usersTable').querySelector('tbody');

  all.forEach(todo => {
    const row = document.createElement('tr');

    const titleCell = document.createElement('td');
    titleCell.textContent = todo.title;
    row.appendChild(titleCell);

    const priorityCell = document.createElement('td');
    priorityCell.textContent = todo.priority;
    row.appendChild(priorityCell);

    const isDoneCell = document.createElement('td');
    isDoneCell.textContent = todo.isDone ? 'Done' : 'In Progress';
    row.appendChild(isDoneCell);

    tableBody.appendChild(row);
  });
}

displayAllTitles();