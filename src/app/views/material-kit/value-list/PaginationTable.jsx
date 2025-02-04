import React, { useState } from "react";
import { Box, Icon, IconButton, TablePagination, styled } from "@mui/material";
import { SimpleTreeView, TreeItem } from "@mui/x-tree-view";

// STYLED COMPONENT
const StyledTable = styled("table")(() => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } }
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } }
  }
}));
const subscribarList = [
  {
    id: 1,
    name: "john doe",
    date: "18 january, 2019",
    amount: 1000,
    status: "close",
    company: "ABC Fintech LTD.",
    children: [
      {
        id: 2,
        name: "child 1",
        date: "20 january, 2019",
        amount: 2000,
        status: "open",
        company: "ABC Fintech LTD.",
        children: [
          {
            id: 3,
            name: "grandchild 1",
            date: "22 january, 2019",
            amount: 3000,
            status: "close",
            company: "ABC Fintech LTD."
          },
          {
            id: 4,
            name: "grandchild 2",
            date: "23 january, 2019",
            amount: 4000,
            status: "open",
            company: "ABC Fintech LTD."
          }
        ]
      },
      {
        id: 5,
        name: "child 2",
        date: "21 january, 2019",
        amount: 3000,
        status: "close",
        company: "ABC Fintech LTD."
      }
    ]
  },
  {
    id: 6,
    name: "kessy bryan",
    date: "10 january, 2019",
    amount: 9000,
    status: "open",
    company: "My Fintech LTD.",
    children: []
  },
  {
    id: 7,
    name: "kessy bryan",
    date: "10 january, 2019",
    amount: 9000,
    status: "open",
    company: "My Fintech LTD.",
    children: [
      {
        id: 8,
        name: "grandchild 1",
        date: "22 january, 2019",
        amount: 3000,
        status: "close",
        company: "ABC Fintech LTD."
      },
      {
        id: 9,
        name: "grandchild 2",
        date: "23 january, 2019",
        amount: 4000,
        status: "open",
        company: "ABC Fintech LTD."
      }
    ]
  },
  //
  {
    id: 10,
    name: "john doe",
    date: "18 january, 2019",
    amount: 1000,
    status: "close",
    company: "ABC Fintech LTD.",
    children: [
      {
        id: 11,
        name: "child 1",
        date: "20 january, 2019",
        amount: 2000,
        status: "open",
        company: "ABC Fintech LTD.",
        children: [
          {
            id: 12,
            name: "grandchild 1",
            date: "22 january, 2019",
            amount: 3000,
            status: "close",
            company: "ABC Fintech LTD."
          },
          {
            id: 13,
            name: "grandchild 2",
            date: "23 january, 2019",
            amount: 4000,
            status: "open",
            company: "ABC Fintech LTD."
          }
        ]
      },
      {
        id: 14,
        name: "child 2",
        date: "21 january, 2019",
        amount: 3000,
        status: "close",
        company: "ABC Fintech LTD."
      }
    ]
  },
  {
    id: 15,
    name: "kessy bryan",
    date: "10 january, 2019",
    amount: 9000,
    status: "open",
    company: "My Fintech LTD.",
    children: []
  },
  {
    id: 16,
    name: "kessy bryan",
    date: "10 january, 2019",
    amount: 9000,
    status: "open",
    company: "My Fintech LTD.",
    children: [
      {
        id: 17,
        name: "grandchild 1",
        date: "22 january, 2019",
        amount: 3000,
        status: "close",
        company: "ABC Fintech LTD."
      },
      {
        id: 18,
        name: "grandchild 2",
        date: "23 january, 2019",
        amount: 4000,
        status: "open",
        company: "ABC Fintech LTD."
      }
    ]
  },
  {
    id: 19,
    name: "john doe",
    date: "18 january, 2019",
    amount: 1000,
    status: "close",
    company: "ABC Fintech LTD.",
    children: [
      {
        id: 20,
        name: "child 1",
        date: "20 january, 2019",
        amount: 2000,
        status: "open",
        company: "ABC Fintech LTD.",
        children: [
          {
            id: 21,
            name: "grandchild 1",
            date: "22 january, 2019",
            amount: 3000,
            status: "close",
            company: "ABC Fintech LTD."
          },
          {
            id: 22,
            name: "grandchild 2",
            date: "23 january, 2019",
            amount: 4000,
            status: "open",
            company: "ABC Fintech LTD."
          }
        ]
      },
      {
        id: 23,
        name: "child 2",
        date: "21 january, 2019",
        amount: 3000,
        status: "close",
        company: "ABC Fintech LTD."
      }
    ]
  },
  {
    id: 24,
    name: "kessy bryan",
    date: "10 january, 2019",
    amount: 9000,
    status: "open",
    company: "My Fintech LTD.",
    children: []
  },
  {
    id: 25,
    name: "kessy bryan",
    date: "10 january, 2019",
    amount: 9000,
    status: "open",
    company: "My Fintech LTD.",
    children: [
      {
        id: 26,
        name: "grandchild 1",
        date: "22 january, 2019",
        amount: 3000,
        status: "close",
        company: "ABC Fintech LTD."
      },
      {
        id: 27,
        name: "grandchild 2",
        date: "23 january, 2019",
        amount: 4000,
        status: "open",
        company: "ABC Fintech LTD."
      }
    ]
  },
  {
    id: 28,
    name: "john doe",
    date: "18 january, 2019",
    amount: 1000,
    status: "close",
    company: "ABC Fintech LTD.",
    children: [
      {
        id: 29,
        name: "child 1",
        date: "20 january, 2019",
        amount: 2000,
        status: "open",
        company: "ABC Fintech LTD.",
        children: [
          {
            id: 30,
            name: "grandchild 1",
            date: "22 january, 2019",
            amount: 3000,
            status: "close",
            company: "ABC Fintech LTD."
          },
          {
            id: 31,
            name: "grandchild 2",
            date: "23 january, 2019",
            amount: 4000,
            status: "open",
            company: "ABC Fintech LTD."
          }
        ]
      },
      {
        id: 32,
        name: "child 2",
        date: "21 january, 2019",
        amount: 3000,
        status: "close",
        company: "ABC Fintech LTD."
      }
    ]
  },
  {
    id: 33,
    name: "kessy bryan",
    date: "10 january, 2019",
    amount: 9000,
    status: "open",
    company: "My Fintech LTD.",
    children: []
  },
  {
    id: 34,
    name: "kessy bryan",
    date: "10 january, 2019",
    amount: 9000,
    status: "open",
    company: "My Fintech LTD.",
    children: [
      {
        id: 35,
        name: "grandchild 1",
        date: "22 january, 2019",
        amount: 3000,
        status: "close",
        company: "ABC Fintech LTD."
      },
      {
        id: 36,
        name: "grandchild 2",
        date: "23 january, 2019",
        amount: 4000,
        status: "open",
        company: "ABC Fintech LTD."
      }
    ]
  }
];

export default function PaginationTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleActionClick = (action, itemId) => {
    console.log(`Action: ${action} on itemId: ${itemId}`);
  };

  const renderTree = (node) => (
    <TreeItem
      key={node.id}
      itemId={String(node.id)}
      label={
        <Box
          sx={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "10px" }}
        >
          <span>{node.name}</span>
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              size="small"
              onClick={() => handleActionClick("edit", node.id)}
              aria-label="edit"
              sx={{ color: "primary.main", fontSize: "16px" }}
            >
              <Icon>edit</Icon>
            </IconButton>
            <IconButton
              size="small"
              onClick={() => handleActionClick("delete", node.id)}
              aria-label="delete"
              sx={{ color: "error.main", fontSize: "16px" }}
            >
              <Icon>delete</Icon>
            </IconButton>
          </Box>
        </Box>
      }
      expandicon={<Icon>expand_more</Icon>}
      collapseicon={<Icon>expand_less</Icon>}
    >
      {node.children && node.children.map((child) => renderTree(child))}
    </TreeItem>
  );

  return (
    <Box width="100%" overflow="auto">
      {/* Custom Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
        <Box sx={{ flex: 1, fontWeight: "bold" }}>Name</Box>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Box sx={{ fontWeight: "bold" }}>Actions</Box>
        </Box>
      </Box>

      <SimpleTreeView multiSelect>
        {subscribarList
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((subscriber) => renderTree(subscriber))}
      </SimpleTreeView>

      <TablePagination
        sx={{
          px: 2,
          fontSize: "0.875rem",
          "& .MuiTablePagination-toolbar": {
            padding: "8px 12px"
          }
        }}
        page={page}
        component="div"
        rowsPerPage={rowsPerPage}
        count={subscribarList.length}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={handleChangeRowsPerPage}
        nextIconButtonProps={{ "aria-label": "Next Page" }}
        backIconButtonProps={{ "aria-label": "Previous Page" }}
      />
    </Box>
  );
}
