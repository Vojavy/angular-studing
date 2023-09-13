import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormsGeneratorService {

  getJsonsListFromServer(): Array<{ name: string; file: any }> {
    const files = [{
      name: "University",
      file: {
        "course": "Course Name",
        "course_code": "Unique Course Code",
        "instructor": {
          "first_name": "Instructor First Name",
          "last_name": "Instructor Last Name",
          "department": "Department the instructor belongs to"
        },
        "classroom": "Room Number",
        "groups": ["Group1", "Group2", "Group3"],
        "days_of_week": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "start_time": "Start Time of Class",
        "end_time": "End Time of Class",
        "class_type": "Lecture/Practical/Workshop",
        "grades": {
          "minimum_grade": 2,
          "maximum_grade": 5
        },
        "required_materials": ["Textbook", "Notebook", "Lab Equipment"],
        "description": "Brief description of the course and its content"

      }
    }
    ];
    return files;
  }
  parseJson(jsonData: any): Array<{ key: string; value: any; type: 'string' | 'number' | 'boolean' }> {
    const parsedData: Array<{ key: string; value: any; type: any }> = [];

    Object.keys(jsonData).forEach(key => {
      const value = jsonData[key];

      if (Array.isArray(value)) {
        parsedData.push({
          key: key,
          value: value,
          type: 'array'
        });
      } else {
        const type = typeof value;
        parsedData.push({
          key: key,
          value: value,
          type: type
        });
      }
    });

    return parsedData;
  }
}
