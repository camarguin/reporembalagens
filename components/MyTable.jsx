import React from 'react';
import {
  Table, Thead, Tbody, Tr, Th, Td, Flex, IconButton, Text, Tooltip, Select, NumberInput, useDisclosure,
  NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Container
} from "@chakra-ui/react";
import { useTable, usePagination, useSortBy, useGlobalFilter } from "react-table";
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { ArrowRightIcon, ArrowLeftIcon, ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import GlobalFilter from './GlobalFilter';
import AddProduct from './AddProduct';

const MyTable = ({ columns, data, isProducts }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
      // updateMyData
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const { isOpen, onOpen, onClose } = useDisclosure()
  // Render the UI for your table
  return (
    <Container padding="0px 20px" maxW>
      {isProducts ? (
        <Flex direction="row" justify="space-between" align="center">
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
          <IconButton variant="primary" color="white" aria-label='Adicionar Produto' icon={<AiOutlineAppstoreAdd />} onClick={onOpen} />
          <AddProduct isOpen={isOpen} onClose={onClose} />
        </Flex>
      ) :
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      }
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => {
            const { key, ...restHeaderGroupProps } =
              headerGroup.getHeaderGroupProps();
            return (
              <Tr key={key} {...restHeaderGroupProps}>
                {headerGroup.headers.map((column) => {
                  const { key, ...restColumn } = column.getHeaderProps(column.getSortByToggleProps());
                  return (
                    <Th key={key} {...restColumn}>
                      {column.render("Header")}
                      <span>{column.isSorted ? (column.isSortedDesc ? ' ???' : ' ???') : ''}</span>
                    </Th>
                  );
                })}
              </Tr>
            );
          })}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            const { key, ...restRowProps } = row.getRowProps();
            return (
              <Tr key={key} {...restRowProps}>
                {row.cells.map((cell) => {
                  const { key, ...restCellProps } = cell.getCellProps();
                  return (
                    <Td key={key} {...restCellProps}>
                      {cell.render("Cell")}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>

      <Flex justifyContent="space-between" m={4} alignItems="center">
        <Flex>
          <Tooltip label="Primeira p??gina">
            <IconButton
              onClick={() => gotoPage(0)}
              isDisabled={!canPreviousPage}
              icon={<ArrowLeftIcon h={3} w={3} />}
              mr={4}
            />
          </Tooltip>
          <Tooltip label="P??gina anterior">
            <IconButton
              onClick={previousPage}
              isDisabled={!canPreviousPage}
              icon={<ChevronLeftIcon h={6} w={6} />}
            />
          </Tooltip>
        </Flex>

        <Flex alignItems="center">
          <Text flexShrink="0" mr={8}>
            P??gina{" "}
            <Text fontWeight="bold" as="span">
              {pageIndex + 1}
            </Text>{" "}
            de{" "}
            <Text fontWeight="bold" as="span">
              {pageOptions.length}
            </Text>
          </Text>
          <Text flexShrink="0">Ir para p??gina:</Text>{" "}
          <NumberInput
            ml={2}
            mr={8}
            w={28}
            min={1}
            max={pageOptions.length}
            onChange={(value) => {
              const page = value ? value - 1 : 0;
              gotoPage(page);
            }}
            defaultValue={pageIndex + 1}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Select
            w={32}
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Mostrar {pageSize}
              </option>
            ))}
          </Select>
        </Flex>

        <Flex>
          <Tooltip label="Next Page">
            <IconButton
              onClick={nextPage}
              isDisabled={!canNextPage}
              icon={<ChevronRightIcon h={6} w={6} />}
            />
          </Tooltip>
          <Tooltip label="Last Page">
            <IconButton
              onClick={() => gotoPage(pageCount - 1)}
              isDisabled={!canNextPage}
              icon={<ArrowRightIcon h={3} w={3} />}
              ml={4}
            />
          </Tooltip>
        </Flex>
      </Flex>
    </Container>
  );
};

export default MyTable;