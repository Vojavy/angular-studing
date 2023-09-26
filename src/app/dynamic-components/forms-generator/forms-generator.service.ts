import { Component, Injectable } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DropDownInputComponent } from './inputs/drop-down-input/drop-down-input.component';
import { TextInputComponent } from './inputs/text-input/text-input.component';
import { CheckBoxInputComponent } from './inputs/check-box-input/check-box-input.component';
import { InputType, InputsMetaService } from './inputs/inputs-meta.service'

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
    }, {
      name: "Job",
      file: {
        "title": "Software Developer",
        "company": "Tech Solutions Inc.",
        "location": "123 Tech Street",
        "salary": 80000,
        "responsibilities": [
          "Develop software applications",
          "Test and debug code",
          "Collaborate with team members"
        ],
        "requirements": [
          "Bachelor's degree in Computer Science",
          "Experience with JavaScript and Angular",
          "Strong problem-solving skills"
        ],
        "application_deadline": "2023-12-31",
        "contact_email": "jobs@techsolutions.com"
      }
    },
    {
      name: "Car",
      file: {
        "make": "Toyota",
        "model": "Camry",
        "year": 2022,
        "color": "Silver",
        "engine": {
          "type": "Gasoline",
          "horsepower": 203
        },
        "features": [
          "Automatic Transmission",
          "Backup Camera",
          "Navigation System"
        ],
        "owners": [
          {
            "name": "John Smith",
            "purchase_date": "2022-03-15"
          },
          {
            "name": "Alice Johnson",
            "purchase_date": "2022-05-20"
          }
        ]
      }
    },
    {
      name: "Car",
      file: {
        "make": "Toyota",
        "model": "Camry",
        "year": 2022,
        "color": "Silver",
        "engine": {
          "type": "Gasoline",
          "horsepower": 203
        },
        "features": [
          "Automatic Transmission",
          "Backup Camera",
          "Navigation System"
        ],
        "owners": [
          {
            "name": "John Smith",
            "purchase_date": "2022-03-15"
          },
          {
            "name": "Alice Johnson",
            "purchase_date": "2022-05-20"
          }
        ]
      }
    }
    ];
    return files;
  }

  parseJson(jsonData: any): Array<{ key: string; value: any; type: InputType }> {
    const parseObject = (obj: any) => {
      const parsedData: Array<{ key: string; value: any; type: InputType }> = [];

      const parseRecursive = (object: any) => {
        for (const key in object) {
          if (object.hasOwnProperty(key)) {
            const value = object[key];
            const type = typeof value;

            if (typeof value === InputType.OBJECT && value !== null) {
              // Если значение является объектом, вызываем parseRecursive рекурсивно
              parsedData.push({
                key: key,
                type: InputType.OBJECT,
                value: value
              });
              parseRecursive(value);
            } else {
              // Если значение не является объектом, добавляем его в parsedData
              parsedData.push({
                key: key,
                value: value,
                type: type as InputType.MAIL | InputType.NUMBER | InputType.TEXT
              });
            }
          }
        }
      };

      parseRecursive(obj);

      return parsedData;
    };

    // Вызываем parseObject с переданными данными
    return parseObject(jsonData);
  }

  // createTextInputForm(inputName: string, label: string, isRequired: boolean, inputsMeta: InputsMetaService): FormGroup {
  //   const textInput = new TextInputComponent(inputsMeta);
  //   textInput.inputName = inputName;
  //   textInput.label = label;
  //   textInput.isRequired = isRequired;
  //   return new FormGroup({ [inputName]: textInput.formControl });
  // }
  // createDropDownInputForm(inputName: string, label: string, isRequired: boolean, inputsMeta: InputsMetaService): FormGroup {
  //   const dropDownInput = new DropDownInputComponent(inputsMeta);
  //   dropDownInput.inputName = inputName;
  //   dropDownInput.label = label;
  //   dropDownInput.isRequired = isRequired;
  //   return new FormGroup({ [inputName]: dropDownInput.formControl });
  // }
}    
