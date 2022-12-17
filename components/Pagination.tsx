import { Pagination } from "antd";

interface customPaginationInterface {
    count: number;
    handlePageChange: any;
    currentPage: number,
}

const CustomPagination = ({ handlePageChange, count, currentPage}: customPaginationInterface) => {
    return <Pagination
    current={currentPage}
    onChange={handlePageChange}
    showSizeChanger={false}
    pageSize={20}
    defaultCurrent={1}
    total={count}
    hideOnSinglePage={true}
    size="small"
    style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '20px',
    }}
  />
};

export default CustomPagination;