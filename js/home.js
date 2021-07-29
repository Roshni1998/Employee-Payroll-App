window.addEventListener('DOMContentLoaded', (event) => {
  createInnerHtml();
});

// Template literal E56 feature
const createInnerHtml = () => {
  const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                     "<th>Salary</th><th>Start Date</th><th>Actions</th>";
  let empPayrollData = createEmployeePayrollJSON()[0];
  const innerHtml = `${headerHtml}
    <tr>
      <td><img class="profile" alt="" src="${empPayrollData._profilePic}"></td>
      <td>${empPayrollData._name}</td>
      <td>${empPayrollData._gender}</td>
      <td>${getDeptHtml(empPayrollData._department)}</td>
      <td>${empPayrollData._salary}</td>
      <td>${empPayrollData._startDate}</td>
      <td>
        <img name="1" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="delete">
        <img name="1" onclick="update(this)" src="../assets/icons/create-black-18dp.svg" alt="edit"> 
      </td>
    </tr>
  `;
  document.querySelector('#table-display').innerHTML = innerHtml;
}

const createEmployeePayrollJSON = () => {
  let empPayrollListLocal = [
    {
      _name: 'Roshni Mali',
      _gender: 'female',
      _department: [
        'Sales',
        'Finance'
      ],
      _salary: '500000',
      _startDate: '29 Oct 2019',
      _note: '',
      _id: new Date().getTime(),
      _profilePic: '../assets/profile-images/Ellipse -1.png'
    },
    {
      _name: 'Shashank Keerthi Kumar',
      _gender: 'male',
      _department: [
        'HR'
      ],
      _salary: '300000',
      _startDate: '29 Oct 2019',
      _note: '',
      _id: new Date().getTime() + 1,
      _profilePic: '../assets/profile-images/Ellipse -2.png'
    }
  ];
  return empPayrollListLocal;
}

const getDeptHtml = (deptList) => {
  let deptHtml = '';
  for (const dept of deptList) {
    deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
  }
  return deptHtml;
}