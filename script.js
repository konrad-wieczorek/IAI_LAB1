







let i=0;
let j=0;

function tabliczka() {

for (i=1; i<=10; i++)
{
    document.write("<tr><td>" + i + "</td>");
    for (j=1; j<=9; j++)
    {
        if (j != 1) {
            document.write("<td>" + i*j + "</td>");
        }
    }
    document.write("</tr>");
}
document.write("</table>");
}