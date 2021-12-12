const app = Vue.createApp({
  data() {
    return {
      name1: "Zin Min Oo",
      name2: "Thaw Zin Phyo",
      googleLink: "https://www.google.com",
      w3School: "https://www.w3school.com",
      courseGoalA: "Learn Vue!",
      courseGoalB: "Master Vue!",
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
  },
});

app.mount("#user-goal");
