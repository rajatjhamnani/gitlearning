
            async function onsignup(event) {
                event.preventDefault();
                const TodoName = event.target.todo.value;
                console.log(obj)
                const Description = event.target.description.value;
                const obj = {
                    TodoName,
                    Description,
                    status: "todo" // pehele status todo  liye
                };
                try {
                    const response = await axios.post("https://crudcrud.com/api/7e81eaf4e6074bb0aebb615e51da9638/todo", obj);
                    showUserOnScreen(response.data);
                    //console.log(response.data)
                } catch (error) {
                    document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong</h4>";
                    console.log(error);
                }
            }

            window.addEventListener("DOMContentLoaded", async () => {
                try {
                    const response = await axios.get("https://crudcrud.com/api/7e81eaf4e6074bb0aebb615e51da9638/todo");
                    const todoData = response.data;

                    for (let i = 0; i < todoData.length; i++) {
                        showUserOnScreen(todoData[i]);
                    }
                } catch (err) {
                    console.log("Something went wrong", err);
                }
            });

            function showUserOnScreen(obj) {
                const todorem = document.getElementById('todorem');
                const tododone = document.getElementById('tododone');

                const child = `<tr  id="${obj._id}">
                    <td>${obj.TodoName} </td>
                    <td>${obj.Description}</td>
                    <td>${obj.status === 'todo' ? `<button onclick="moveToDone('${obj._id}')">Move to Done</button>` : `<button onclick="deleteTodoItem('${obj._id}')">Delete</button>`}
                    </td>
                </tr>`;

                if (obj.status === "todo") {
                    todorem.innerHTML += child;
                } else if (obj.status === "done") {
                    tododone.innerHTML += child;
                }
            }

            async function moveToDone(userid) {
                const todoItem = document.getElementById(userid);
                const moveButton = todoItem.querySelector('button');
                moveButton.remove(); // Remove the "Move to Done" button

                try {
                    await axios.put(`https://crudcrud.com/api/7e81eaf4e6074bb0aebb615e51da9638/todo/${userid}`, {
                        TodoName: todoItem.querySelector('td:nth-child(1)').innerText,
                        Description: todoItem.querySelector('td:nth-child(2)').innerText,
                        status: "done"
                    });

                    const todo = document.getElementById(userid);
                    const done = document.getElementById('tododone');
                    done.appendChild(todo);
                } catch (error) {
                    console.log(error);
                    // If there's an error, you might want to add back the "Move to Done" button
                    todoItem.appendChild(moveButton);
                }
            }

            async function deleteTodoItem(userid) {
                // const confirmed = confirm("Are you sure you want to delete this item?");
                // if (!confirmed) {
                //     return;
                // }

                try {
                    await axios.delete(`https://crudcrud.com/api/7e81eaf4e6074bb0aebb615e51da9638/todo/${userid}`);
                    const todoItem = document.getElementById(userid);
                    todoItem.remove();
                } catch (error) {
                    console.log(error);
                }
            }
   