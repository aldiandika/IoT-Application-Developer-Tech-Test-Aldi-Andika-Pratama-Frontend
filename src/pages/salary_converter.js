import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import axios from "axios";


class SalaryConverter extends React.Component {
  state = {
    userSalaryData: []
  }

  componentDidMount() {
    axios({
      method: "get",
      url: 'http://localhost:3000/api/ref-data',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }).then(
      res => {
        const response = res.data.newSalaryList;
        // console.log(response);
        this.setState({
          userSalaryData: response,
        });
      }
    ).catch(
      err => {
        console.log(err)
      }
    )
  }

  render() {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          maxWidth: '100vw',
          p: 8,
        }}
      >
        <Typography
          fontSize='1.5em'
          fontWeight={700}
        >
          Salary Converter
        </Typography>
        <br />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  backgroundColor: 'darkgray'
                }}
                align="center"
              >
                <Typography
                  color='white'
                  fontSize='1em'
                  fontWeight={700}
                >
                  ID
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: 'darkgray'
                }}
                align="center"
              >
                <Typography
                  color='white'
                  fontSize='1em'
                  fontWeight={700}
                >
                  Name
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: 'darkgray'
                }}
                align="center"
              >
                <Typography
                  color='white'
                  fontSize='1em'
                  fontWeight={700}
                >
                  Username
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: 'darkgray'
                }}
                align="center"
              >
                <Typography
                  color='white'
                  fontSize='1em'
                  fontWeight={700}
                >
                  Email
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: 'darkgray'
                }}
                align="center"
              >
                <Typography
                  color='white'
                  fontSize='1em'
                  fontWeight={700}
                >
                  Adress
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: 'darkgray'
                }}
                align="center"
              >
                <Typography
                  color='white'
                  fontSize='1em'
                  fontWeight={700}
                >
                  Phone
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: 'darkgray'
                }}
                align="center"
              >
                <Typography
                  color='white'
                  fontSize='1em'
                  fontWeight={700}
                >
                  Salary in IDR
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: 'darkgray'
                }}
                align="center"
              >
                <Typography
                  color='white'
                  fontSize='1em'
                  fontWeight={700}
                >
                  Salary In USD
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {this.state.userSalaryData.map((data) => (
              <TableRow>
                <TableCell>
                  {data.id}
                </TableCell>
                <TableCell>
                  {data.name}
                </TableCell>
                <TableCell>
                  {data.username}
                </TableCell>
                <TableCell>
                  {data.email}
                </TableCell>
                <TableCell>
                  {data.address.street} {data.address.suite} {data.address.city} {data.address.zipcode}
                </TableCell>
                <TableCell>
                  {data.phone}
                </TableCell>
                <TableCell>
                  {data.salaryInIDR}
                </TableCell>
                <TableCell>
                  {data.salaryInUSD}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>


      </Box>
    )
  }


}

export default SalaryConverter;