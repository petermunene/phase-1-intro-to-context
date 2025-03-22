// Your code here
function createEmployeeRecord(arr) {
    return {
      firstName: arr[0],
      familyName: arr[1],
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }

  function createEmployeeRecords(employeeData) {
    return employeeData.map(createEmployeeRecord);
  }
  function createTimeInEvent(employee, dateTimeStr) {
    let [date, hour] = dateTimeStr.split(" ");
    employee.timeInEvents.push({
      type: "TimeIn",
      date: date,
      hour: parseInt(hour, 10),
    });
    return employee;
  }
  function createTimeOutEvent(employee, dateTimeStr) {
    let [date, hour] = dateTimeStr.split(" ");
    employee.timeOutEvents.push({
      type: "TimeOut",
      date: date,
      hour: parseInt(hour, 10),
    });
    return employee;
  }
  function hoursWorkedOnDate(employee, dateStr) {
    let timeIn = employee.timeInEvents.find((e) => e.date === dateStr);
    let timeOut = employee.timeOutEvents.find((e) => e.date === dateStr);
    return (timeOut.hour - timeIn.hour) / 100; // Convert minutes to hours
  }
  function wagesEarnedOnDate(employee, dateStr) {
    return hoursWorkedOnDate(employee, dateStr) * employee.payPerHour;
  }
  function allWagesFor(employee) {
    return employee.timeInEvents.reduce((total, event) => {
      return total + wagesEarnedOnDate(employee, event.date);
    }, 0);
  }
  function calculatePayroll(employees) {
    return employees.reduce((total, emp) => total + allWagesFor(emp), 0);
  }
  function createEmployeeRecords(employeeDataArray) {
    return employeeDataArray.map(createEmployeeRecord);
  }  