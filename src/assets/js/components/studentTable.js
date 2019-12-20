function averageCalc() {
  let sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'number') {
      sum += arguments[i];
    }
  }
  return sum / arguments.length;
}

export default function(students) {
  let isAppended = false;
  let html = '';
  
  students.forEach((student, idx) => {
    const stdHtml = '<tr class="good">' +
                `<td>${ idx }</td>` +
                `<td>${ student.name }</td>` +
                `<td>${ student.gender }</td>` +
                `<td>${ student.math }</td>` +
                `<td>${ student.English }</td>` +
                `<td>${ averageCalc(student.English, student.math) }</td>` +
              '</tr>';
    html += stdHtml;
  });
  
  const $viewDataButton = $('#viewData');
  const $tableBody = $('.student-list table tbody');
  
  $viewDataButton.on('click', function(e) {
    const $target = $(e.currentTarget);

    if (!isAppended) {
      $tableBody.append(html);
      isAppended = true;
      $target.html('Hide data');
    } else {
      $tableBody.html('');
      isAppended = false;
      $target.html('View data')
    }
  });
}
