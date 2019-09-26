function JSONtable(input) {
    console.log(`<table>`);
    input.forEach(line => {
        let parsedLine = JSON.parse(line);
        console.log(`   <tr>`)
        console.log(`       <td>${parsedLine.name}</td>`)
        console.log(`       <td>${parsedLine.position}</td>`)
        console.log(`       <td>${parsedLine.salary}</td>`)
        console.log(`   </tr>`)
    });

    console.log(`</table>`);
}

JSONtable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']);


// <table>
// 	<tr>
// 		<td>Pesho</td>
// 		<td>Promenliva</td>
// 		<td>100000</td>
// 	</tr>
// 	<tr>
// 		<td>Teo</td>
// 		<td>Lecturer</td>
// 		<td>1000</td>
// 	</tr>
// 	<tr>
// 		<td>Georgi</td>
// 		<td>Lecturer</td>
// 		<td>1000</td>
// 	</tr>
// </table>