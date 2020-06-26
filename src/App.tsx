import React, { useState } from 'react';
import logo from './logo.svg';
import { Button, message, Input, Card, Space, Spin } from 'antd';
import styles from './App.module.less';

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div className={styles.app}>
      <Spin tip="Loading..." spinning={loading}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button
            type="primary"
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
              }, 4000);
            }}
          >
            Hello World
          </Button>
          <Input type="number" />
          <Space align="center">
            <Card title="标题">
              <p>这个是内容</p>
            </Card>
            <Card title="标题">
              <p>这个是内容</p>
            </Card>
            <Card title="标题">
              <p>这个是内容</p>
            </Card>
          </Space>
        </header>
      </Spin>
    </div>
  );
}

export default App;
