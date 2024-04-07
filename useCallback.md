# useCallback

useCallback sử dụng để tránh tạo ra những hàm mới không cần thiết

const fn = useCallback(func(), [dependencies])
Sẽ khởi tạo hàm mới và trả về tham chiếu đến hàm mới khi [dependencies] thay đổi

## Vấn đề đặt ra

### App.jsx

```
import React from "react";
import { useState } from "react";
import UseCallback from "./components/UseCallback/UseCallback";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <>
      <UseCallback onIncrease={handleIncrease}></UseCallback>
      <h1>{count}</h1>
    </>
  );
};

export default App;
```

### UseCallback.jsx

```
import { React, memo } from "react";

const UseCallback = ({ onIncrease }) => {
  console.log("UseCallback re-render");
  return <button onClick={onIncrease}>Increase</button>;
};

export default memo(UseCallback);
```

Khi thực hiện bấm vào nút Increase ở trên, cửa sổ console sẽ in ra "UseCallback re-render" sau mỗi lần bấm. Lý do vì mỗi lần useState được thực thi, hàm handleIncrease sẽ được định nghĩa lại, trả về một tham chiếu hàm khác, dẫn đến props trong UseCallback cũng thay đổi, nên component con sẽ bị re-render.

## Cách giải quyết

### App.jsx

```
import React, { useCallback } from "react";
import { useState } from "react";
import UseCallback from "./components/UseCallback/UseCallback";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  return (
    <>
      <UseCallback onIncrease={handleIncrease}></UseCallback>
      <h1>{count}</h1>
    </>
  );
};

export default App;
```

Sử dụng useCallback() khi định nghĩa hàm để tránh việc khởi tạo lại hàm mới hay nói cách khác, sử dụng lại tham chiếu hàm cũ
