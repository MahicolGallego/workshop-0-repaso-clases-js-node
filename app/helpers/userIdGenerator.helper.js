export async function userIdGenerator() {
    const fecthUser = await fetch("http://localhost:3000/users");
    const users = await fecthUser.json();
  
    function newUserIdGenerator() {
      if (!users.length) {
        return 1;
      }
  
      return users[users.length - 1].id + 1;
    }
  
    return newUserIdGenerator;
  }