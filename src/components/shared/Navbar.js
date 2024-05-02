"use client"

import { useState } from 'react';
import { Input, Menu } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Image from 'next/image';

const { Search } = Input;

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (value) => {
    // Implement your search logic here
    console.log('Searching for:', value);
  };

  return (
    <div className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-sm md:text-lg pl-5">
            Message Mind
        </div>
        <Menu className=' hidden md:block' theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="about">About</Menu.Item>
          <Menu.Item key="contact">Contact</Menu.Item>
        </Menu>
        <div className="flex items-center pr-5">
          <Search
            placeholder="Search"
            onSearch={handleSearch}
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            style={{ width: 200 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
