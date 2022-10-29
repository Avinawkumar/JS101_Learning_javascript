// ### **Problem-2 Grade Student Marks**

// - Given an object of student grades and their marks in the mentioned below format, print the highest scored student for each grade along with the total
// - Sample output
// V-Prateek-90
// VI-Albert-90
// VII-Sandhya-90


let arr= [
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
]

// working on the arr[0]'
function calculateMarks(arr_marks){
  let sum=0;
  for(let i=0; i<arr_marks.length; i++){
    sum = sum+arr_marks[i];
  }
  return sum;
}



function calculateHighest(obj1){
  let grade = obj1.grade;
  let highest_marks= -Infinity;
  let name;

  for(let i=0; i<obj1.students.length; i++){

    let arr_marks=obj1.students[i].marks
    let total_marks= calculateMarks(arr_marks)

    if(total_marks > highest_marks){
      highest_marks= total_marks;
      name=obj1.students[i].name;
    } 
  }

  console.log(grade+"-"+name+"-"+highest_marks)
}




for(i=0; i<arr.length; i++){
  calculateHighest(arr[i]);
}