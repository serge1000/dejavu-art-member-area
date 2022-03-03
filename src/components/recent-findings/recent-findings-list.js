import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { format } from "date-fns";
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { getInitials } from "../../utils/get-initials";

export const RecentFindingsList = ({ recent_findings, ...rest }) => {
  //const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  //const [limit, setLimit] = useState(10);
  //const [page, setPage] = useState(0);

  return (
    <Card {...rest} style={{ maxHeight: 1000, overflow: "auto" }}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>&nbsp;</TableCell>
                <TableCell>&nbsp;</TableCell>
                <TableCell align='center'>
                  <Typography sx={{ mb: 0 }} variant="h5">
                    Recent Findings
                  </Typography>
                </TableCell>
                <TableCell>&nbsp;</TableCell>
                <TableCell>&nbsp;</TableCell>
              </TableRow>

              <TableRow>
                <TableCell  >Originals</TableCell>
                <TableCell>&nbsp;</TableCell>
                <TableCell  align='center'>Simularities</TableCell>
                <TableCell>&nbsp;</TableCell>
                <TableCell>&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recent_findings.map((recent_finding) => (
                <TableRow key={recent_finding.id}>
                  <TableCell >
                    <img className="image-recent-findings" src={recent_finding.original} />
                  </TableCell>
                  <TableCell>
                    <img className="image-recent-findings" src={recent_finding.simularity1} />
                  </TableCell>
                  <TableCell>
                    <img className="image-recent-findings" src={recent_finding.simularity2} />
                  </TableCell>
                  <TableCell>
                    <img className="image-recent-findings" src={recent_finding.simularity3} />
                  </TableCell>
                  <TableCell>MORE...</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <style jsx>{`
        .image-recent-findings {
          display: block;
          max-width: 150px;
          max-height: 150px;
          width: auto;
          height: auto;
          margin-right: 10px;
        }
      `}</style>
    </Card>
  );
};

RecentFindingsList.propTypes = {
  recent_findings: PropTypes.array.isRequired,
};
