//your JS code here. If required.
const form = document.getElementById("voteForm");

    form.addEventListener("submit", function(event) {
      event.preventDefault(); // prevent actual form submission

      const name = document.getElementById("name").value.trim();
      const age = document.getElementById("age").value.trim();

      // Validation
      if (name === "" || age === "") {
        alert("Please enter valid details.");
        return;
      }

      // Promise
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (parseInt(age) > 18) {
            resolve(name);
          } else {
            reject(name);
          }
        }, 4000); // 4 seconds delay
      })
      .then((name) => {
        alert(`Welcome, ${name}. You can vote.`);
      })
      .catch((name) => {
        alert(`Oh sorry ${name}. You aren't old enough.`);
      });
    });
