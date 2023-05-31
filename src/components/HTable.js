import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";

const HTable = ({ headers, items }) => {
  const keysArray = headers.map((header) => header.value);
  let sortedObject = {};

  for (let i = 0; i < keysArray.length; i++) {
    sortedObject[keysArray[i]] = i;
  }

  const newItems = items.map((object) => {
    for (let item in object) {
      const find = keysArray.includes(item);
      if (!find) {
        delete object[item];
      }
    }

    return Object.assign(
      {},
      ...Object.keys(object)
        .sort((a, b) => sortedObject[a] - sortedObject[b])
        .map((x) => {
          return { [x]: object[x] };
        })
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell align="center" key={header.text}>
                {header.text}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {newItems.map((item, id) => (
            <TableRow key={id}>
              {Object.keys(item).map((key, index) => (
                <TableCell align="center" key={index}>
                  {key === "avatar" && <Avatar src={item.avatar} />}
                  {key !== "avatar" && typeof item[key] !== "object" && (
                    <p>{item[key]}</p>
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HTable;
