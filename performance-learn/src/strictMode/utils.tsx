export function slowCountItems(data: any, ms: any) {
    const wakeUpTime = Date.now() + ms;
    while(Date.now() < wakeUpTime) {}
    return data.length
  }