/* eslint-disable max-len */
import React from 'react';
import './Posts.css';
import {
  Table, Input, Pagination,
} from 'antd';
import usePosts from './usePosts';
import withAuth from '../../utils/withAuth';
// import Button from '../../components/ButtonMenu';

function PostsView() {

  const {
    columns, listCharacter, filterTable, pages, postsResearch,
  } = usePosts();
  return (
    <>
      <Input placeholder="Filtro" onChange={filterTable} />
      <div className="general-container-post">
        <div className="div2-post">
          <Table
            columns={columns}
            dataSource={listCharacter}
            style={{
              width: '300vw',
            }}
            scroll={{
              y: 300,
            }}
            rowKey={({ id }) => id}
            pagination={false}
          />

        </div>
        <div className="div3-post">
          <Pagination
            defaultCurrent={1}
            total={pages}
            onChange={(page) => {

              postsResearch(page);

            }}
          />
        </div>
      </div>
    </>
  );

}

export default withAuth(PostsView);
