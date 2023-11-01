export const tasksData = [
  { id: 1, title: 'Task 1', completed: false, createdAt: '2023-10-30T08:00:00' },
  { id: 2, title: 'Task 2', completed: true, createdAt: '2023-10-30T09:15:00' },
  { id: 3, title: 'Task 3', completed: false, createdAt: '2023-10-30T10:30:00' },
  { id: 4, title: 'Task 4', completed: true, createdAt: '2023-10-30T11:45:00' },
  { id: 5, title: 'Task 5', completed: false, createdAt: '2023-10-30T13:00:00' },
];

export const challengesData = [
  {
    name: "Interactive card details form",
    description: `Your challenge is to build out this interactive card details form and get it looking as close to the design as possible.<br><br>
        You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.<br><br>
        Your users should be able to:<br><br>
        - Fill in the form and see the card details update in real time<br>
        - Receive error messages when the form is submitted if:<br>
          - Any input field is empty<br>
          - The card number, expiry date, or CVC fields are in the wrong format<br>
        - View the optimal layout depending on their device's screen size<br>
        - See hover, active, and focus states for interactive elements on the page.`,
    href: "/challenge-1",
    image:
      "/challenges-resources/challenge-1_interactive_card_details/design/desktop-design.jpg",
  },
  {
    name: "Results Summary Component",
    description: `Your challenge is building out this results summary component and getting it as close to the design as possible.<br/><br/>
    You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.<br/><br/>
    We provide the data for the results in a local data.json file. So you can use that to add the results and total score dynamically if you choose.<br/><br/>
    Your users should be able to:<br/><br/>
    - View the optimal layout for the interface depending on their device's screen size<br/>
    - See hover and focus states for all interactive elements on the page<br/>
    - Bonus: Use the local JSON data to dynamically populate the content.`,
    href: "/challenge-2",
    image:
      "/challenges-resources/challenge-2_results_summary_component/design/desktop-design.jpg",
  },
  {
    name: "Interactive Comments Section",
    description: `Your challenge is to build out this interactive comments section and get it looking as close to the design as possible.<br><br>
        You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.<br><br>
        We provide the data in a local data.json file, so use that to populate the content on the first load. If you want to take it up a notch, feel free to build this as a full-stack CRUD application!<br><br>
        Your users should be able to:<br><br>
        - Create, Read, Update, and Delete comments and replies<br>
        - Upvote and downvote comments<br>
        - View the optimal layout for the app depending on the device's screen size<br>
        - See hover states for all interactive elements on the page<br>
        - Bonus: If you're building a purely front-end project, use localStorage to save the current state in the browser that persists when the browser is refreshed<br>
        - Bonus: Build this project as a full-stack application`,
    href: "/challenge-3",
    image:
      "/challenges-resources/challenge-3_interactive_comments_section/design/desktop-design.jpg",
  },
  {
    name: "Multi Step Form",
    description: `Your challenge is to build out this multi-step form and get it looking as close to the design as possible.<br><br>
        You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.<br><br>
        Your users should be able to:<br><br>
        - Complete each step of the sequence<br>
        - Go back to a previous step to update their selections<br>
        - See a summary of their selections on the final step and confirm their order<br>
        - View the optimal layout for the interface depending on their device's screen size<br>
        - See hover and focus states for all interactive elements on the page<br>
        - Receive form validation messages if:
          - A field has been missed<br>
          - The email address is not formatted correctly<br>
          - A step is submitted, but no selection has been made`,
    href: "/challenge-4",
    image:
      "/challenges-resources/challenge-4_multistep_form/design/desktop-preview.jpg",
  },
  {
    title: 'Challenge 5 - Todo List Form',
    description: `Your challenge is to create a todo list form where users can add, edit, and remove tasks. <br>* Get it looking as close to the design as possible...`,
    href: '/challenge-5',
    images: [
      '/challenges/challenge-1_interactive_card_details/design/active-stats.jpg',
    ],
  },
];
