import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined, } from '@ant-design/icons';
import FormButton from '../components/Button';
import { isLoggedIn } from '../util/helpers';
import '../scss/projects.scss'



class EmployeeList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      searchedColumn: '',
      data: [],
      position: '',
      loading: true
    };
  }

  componentDidMount() {
    const { employeeList, history } = this.props;
    const user = isLoggedIn();
    if(!user) {
        history.push('/login')
    }
    if (employeeList) {
      this.setState({ data: employeeList, loading: false });
    }
    this.props.dispatch({ type: 'EMPLOYEE_LIST' });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.employeeList !== this.props.employeeList) {
      this.setState({ data: this.props.employeeList, loading: false })
    }
  }



  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
          text
        ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const { position } = this.state;
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: '30%',
        ...this.getColumnSearchProps('name'),
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: '20%',
        ...this.getColumnSearchProps('age'),
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
        width: '20%',
        ...this.getColumnSearchProps('gender'),
      }, {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        width: '20%',
        ...this.getColumnSearchProps('email'),
      },
      {
        title: 'PhoneNumber',
        dataIndex: 'phoneNo',
        key: 'phoneNo',
        width: '20%',
        ...this.getColumnSearchProps('phoneNo'),
      }
    ];
    return (
      <>
        {position === 'Admin' &&
          <FormButton classes="project-btn" onClickEvent={this.onClickEvent}>Create Project</FormButton>
        }
        <Table
          loading={this.state.loading}
          columns={columns}
          dataSource={this.state.data} />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    employeeList: state.employeelist?.user
  }
}
export default connect(mapStateToProps)(EmployeeList);

