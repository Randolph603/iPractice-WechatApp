Page({
  /**
   * Page initial data
   */
  data: {
    title: "SSDDSS",
    abe: "sdds",
    progress: 0,
    logs: [] as string[]
  },

  // local call back methods
  buttonClick(e: any) {
    console.log(e + "login !");
    this.setData({ progress: 100 });
  },
  progressFinished() {
    this.setData({ progress: 0 });
    this.data.logs.map(a => a.length);
  }
})
