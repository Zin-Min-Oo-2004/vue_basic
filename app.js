const app = Vue.createApp({
  data() {
    return {
      name1: "Zin Min Oo",
      name2: "Thaw Zin Phyo",
      googleLink: "https://www.google.com",
      w3School: "https://www.w3school.com",
      courseGoalA: "Learn Vue!",
      courseGoalB: "Master Vue!",
      htmlA: "<p>This is htmlA</p>",
      htmlB: "<p>This is htmlB</p>",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
    outputHTML() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.htmlA;
      } else {
        return this.htmlB;
      }
    },
  },
});

app.mount("#user-goal");
