import { SearchOutlined, MailOutlined } from '@ant-design/icons';
import { Input} from 'antd';
const {Search} = Input

const onSearch = (value) => console.log(value);
const SearchBarMail = () => (
    <Search
      placeholder="Search mail"
    />
)


export default SearchBarMail
