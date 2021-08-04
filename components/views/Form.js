import html from "html-literal";

export default () => html`
  <form id="register" method="POST" action="">
    <div>
      <label for="url">Photo URL:</label>
      <input
        type="text"
        name="url"
        id="url"
        placeholder="Enter Photo URL"
        required
      />
    </div>
    <div>
      <label for="title">Photo Title/Description:</label>
      <input type="text" name="title" id="title" />
    </div>
    <div>
      <label for="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="your@email.here"
      />
    </div>
    <input type="submit" name="register" value="Register" />
  </form>
`;
