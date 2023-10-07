function functionSelect(){
    let selectedFunction = document.getElementById('select_function').value;

    form(selectedFunction);
}

function form(selectedFunction){
    let form = [
        {
            function: 'addition()',
            title: 'Return the Sum of Two Numbers',
            input_field: [
                {
                    title: 'First Number',
                    placeholder: 'Enter the First Number',
                },
                {
                    title: 'Second Number',
                    placeholder: 'Enter the Second Number'
                }
            ]
        },
        {
            function: 'convert()',
            title: 'Convert Minutes into Seconds',
            input_field: [
                {
                    title: 'Minutes',
                    placeholder: 'Enter the Minutes',
                }
            ]
        },
        {
            function: 'nextNumber()',
            title: 'Return the Next Number from the Integer Passed',
            input_field: [
                {
                    title: 'Number',
                    placeholder: 'Enter the Number',
                }
            ]
        },
        {
            function: 'triArea()',
            title: 'Area of a Triangle',
            input_field: [
                {
                    title: 'Width',
                    placeholder: 'Enter the width of Triangle',
                },
                {
                    title: 'Height',
                    placeholder: 'Enter the height of Triangle'
                }
            ]
        },
        {
            function: 'getFirstValue()',
            title: 'Return the First Element in an Array',
            input_field: [
                {
                    title: 'Write a array',
                    placeholder: 'example: [1, 5, 9, 6]',
                }
            ]
        },
        {
            function: 'calcAge()',
            title: 'Convert Age to Days',
            input_field: [
                {
                    title: 'Age',
                    placeholder: 'Write a Age',
                }
            ]
        },
        {
            function: 'circuitPower()',
            title: 'Power Calculator',
            input_field: [
                {
                    title: 'Voltage',
                    placeholder: 'Write voltage value',
                },
                {
                    title: 'Current',
                    placeholder: 'Write current value',
                }
            ]
        },
        {
            function: 'nextEdge()',
            title: 'Maximum Edge of a Triangle',
            input_field: [
                {
                    title: 'First edge',
                    placeholder: 'Write edge value',
                },
                {
                    title: 'Second edge',
                    placeholder: 'Write edge value',
                }
            ]
        },
        {
            function: 'remainder()',
            title: 'Return the Remainder from Two Numbers',
            input_field: [
                {
                    title: 'First Number',
                    placeholder: 'Write a number',
                },
                {
                    title: 'Second Number',
                    placeholder: 'Write another number',
                }
            ]
        },
        {
            function: 'giveMeSomething()',
            title: 'Return Something to Me!',
            input_field: [
                {
                    title: 'Sentence',
                    placeholder: 'Write a sentence',
                },
            ]
        },
        {
            function: 'squared()',
            title: 'Return Square Value!',
            input_field: [
                {
                    title: 'Value',
                    placeholder: 'Write a number',
                },
            ]
        },
        {
            function: 'lessThanOrEqualToZero()',
            title: 'Is the Number Less than or Equal to Zero?',
            input_field: [
                {
                    title: 'Value',
                    placeholder: 'Write a number',
                },
            ]
        },
        {
            function: 'sumPolygon()',
            title: 'Sum of Polygon Angles',
            input_field: [
                {
                    title: 'Polygon Value',
                    placeholder: 'Write a number',
                },
            ]
        },
        {
            function: 'nameString()',
            title: 'Basic Variable Assignment',
            input_field: [
                {
                    title: 'Sentence',
                    placeholder: 'Write a sentence',
                },
            ]
        },
        {
            function: 'lessThan100()',
            title: 'Less Than 100?',
            input_field: [
                {
                    title: 'First number',
                    placeholder: 'Write a number',
                },
                {
                    title: 'First number',
                    placeholder: 'Write Another number',
                },
            ]
        },
    ];
    
    let formData = form[selectedFunction];

    let formHtml = `<h3 class="mb-5 text-center">${formData.title}</h3><div class="mb-3">`;

    if(Object.keys(formData.input_field).length >= 1){
        formHtml += `<div class="py-2"><label for="input_one" class="form-label">${formData.input_field[0].title}</label>
        <input type="text" class="form-control" id="input_one" placeholder="${formData.input_field[0].placeholder}" required></div>`;
    }

    if(Object.keys(formData.input_field).length == 2){
        formHtml += `<div class="py-2"><label for="input_two" class="form-label">${formData.input_field[1].title}</label>
        <input type="text" class="form-control" id="input_two" placeholder="${formData.input_field[1].placeholder}" required></div>`;
    }
    
    formHtml += `</div><div class="d-flex justify-content-center"><button class="btn btn-success" onclick="submit()">Submit</button></div>`;

    document.getElementById('form').innerHTML = formHtml;
}

function submit() {
    var output = '';
    let input_one = document.getElementById('input_one');
    let input_two = document.getElementById('input_two');

    
    let selectedFunction = parseInt(document.getElementById('select_function').value);
    switch (selectedFunction) {
        case 0:
            output = addition(input_one.value, input_two.value);
            break;
        case 1:
            output = convert(input_one.value);
            break;
        case 2:
            output = nextNumber(input_one.value);
            break;
        case 3:
            output = triArea(input_one.value, input_two.value);
            break;
        case 4:
            output = getFirstValue(input_one.value);
            break;
        case 5:
            output = calcAge(input_one.value);
            break;
        case 6:
            output = circuitPower(input_one.value, input_two.value);
            break;
        case 7:
            output = nextEdge(input_one.value, input_two.value);
            break;
        case 8:
            output = remainder(input_one.value, input_two.value);
            break;
        case 9:
            output = giveMeSomething(input_one.value);
            break;
        case 10:
            output = squared(input_one.value);
            break;
        case 11:
            output = lessThanOrEqualToZero(input_one.value);
            break;
        case 12:
            output = sumPolygon(input_one.value);
            break;
        case 13:
            output = nameString(input_one.value);
            break;
        case 14:
            output = lessThan100(input_one.value, input_two.value);
            break;

        default:
            output = 'Invalid function selected.';
    }

    document.getElementById('output').innerText = output;
}

function errorShow(message){
    let error = document.getElementById('error');
    error.classList.add('d-block');
    error.classList.remove('d-none');

    error.innerText = message;
}

function errorRemove(){
    error.classList.remove('d-block');
    error.classList.add('d-none');
}
