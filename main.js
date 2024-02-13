class users {
    constructor(username, password, isAdmin=false) {
      this.username = username
      this.password = password
      this.isAdmin = this.isAdmin
    }
  }

  const user1 = new users('tayHan', '12345');
  const user2 = new users('rachLauren', '555tuna', true);
  const user3 = new users('JosLuistro', 'H@6rL1');
  const user4 = new users('ErizhaMar', 'd3*T7v');
  const user5 = new users('nathLim', 'Xy9#pQ');


  function login() {
    const username = document.getElementById('usr1').value;
    const password = document.getElementById('pwd1').value;

    // Check if username and password match any user's credentials
    const user = findUser(username, password);

    if (user) {
        // If user is found, check if remember me is checked
        const rememberMe = document.getElementById('check-box').checked;

        // Set expiration date for the cookie (3 weeks from now)
        let expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 21);

        if (rememberMe) {
            // Store user authentication token or session information in a cookie
            document.cookie = `user=${user.username}; expires=${expirationDate.toUTCString()}; path=/`;
        }

        // Check if the user is an admin
        if (user.isAdmin) {
            // Redirect to admin page or perform admin-specific actions
            console.log('Redirecting to admin page');
            window.location.href = 'home.html';
        } else {
            // Redirect to regular user page or perform user-specific actions
            console.log('Redirecting to user page');
            window.location.href = 'home.html';
        }
    } else {
        // If user is not found, display an error message
        console.log('Invalid username or password');
        document.getElementById("invalid").style.display = "block";
        
    }
}

function findUser(username, password) {
    // Array of user objects
    const users = [
        user1, user2, user3, user4, user5
    ];

    // Iterate over the users array to find the matching user
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            // Return the user object if found
            return users[i];
        }
    }

    // Return null if user is not found
    return null;
}

//---------------------------------------------------------------------------------------//
//                                   POSTS PART                                          //
//---------------------------------------------------------------------------------------//

class posts{
    constructor(user, title, date, description) {
        this.username = user
        this.title = title
        this.date = date
        this.description = description
      }
}

const post1 = new posts(
    user1.username,
    "Thoughts on Sir John Doe for adprg?",
    "09/03/2020",
    "I'm looking for an ez quatro"
)
const post2 = new posts(
    user2.username,
    "Thoughts on Ms Jane for prog?",
    "03/10/2021",
    "I have so much majors this term please tell me she doesn't give too much work"
)

const post3 = new posts(
    user3.username,
    "Thoughts on Sir Jack for is subs?",
    "05/11/2022",
    "would appreciate someone I can learn from huhuhu"
)

const post4 = new posts(
    user4.username,
    "Thoughts on Ms Anna for ethic?",
    "06/15/2023",
    "magaling ba magturo? kumusta workload sa kanya?"
)
const post5 = new posts(
    user5.username,
    "Thoughts on Sir Ram for PE subs?",
    "01/31/2024",
    "maayos ba siya magturo? HAHAHAH"
)