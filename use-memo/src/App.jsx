import Item from './Item';
import { itemList } from './array';
import { useMemo, useState } from 'react';

const App = () => {
  const [items, setItems] = useState(itemList);
  const [category, setCategory] = useState('All');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [date, setDate] = useState('');

  const categories = useMemo(() => {
    return [...new Set(items.map((item) => item.category))].sort();
  }, [items]);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      if (category !== 'All' && item.category !== category) return false;
      const itemDate = new Date(item.date);
      if (fromDate && itemDate < new Date(fromDate)) return false;
      if (toDate && itemDate > new Date(toDate)) return false;
      return true;
    });
  }, [category, items, fromDate, toDate]);

  const total = useMemo(() => {
    return filteredItems.reduce((prev, item) => prev + Number(item.amount), 0);
  }, [filteredItems]);

  const categoryTotals = useMemo(() => {
    return items.reduce((prev, item) => {
      const cat = item.category;
      prev[cat] = (prev[cat] || 0) + Number(item.amount);
      return prev;
    }, {});
  }, [items]);

  const addExpense = () => {
    if (!title || !amount || !newCategory || !date) return;
    const newItem = {
      id: crypto.randomUUID(),
      title,
      amount: Number(amount),
      category: newCategory,
      date,
      image: 'https://picsum.photos/400',
    };
    setItems((prev) => [newItem, ...prev]);
    setTitle('');
    setAmount('');
    setNewCategory('');
    setDate('');
  };

  return (
    <div className="app-container">
      <div className="controls-wrapper">
        <h1 className="app-title">Expense useMemo</h1>
        <div className="filter-bar">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select-field flex-1"
          >
            <option value="All">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="input-field"
          />

          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="add-expense-form">
          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-field"
          />
          <input
            placeholder="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input-field"
          />
          <input
            placeholder="Category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="input-field"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="input-field"
          />
          <button onClick={addExpense} className="btn-add">
            Add Expense
          </button>
        </div>

        <p className="total-amount">
          <strong>{category} Total:</strong> {total}
        </p>
      </div>

      <div className="summary-wrapper">
        <h4 className="summary-title">Spend by Category</h4>

        <div className="summary-grid">
          {Object.entries(categoryTotals).map(([cat, amount]) => (
            <div key={cat} className="summary-tile">
              <span className="summary-cat-name">{cat}</span>
              <span className="summary-cat-amount">${amount}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="items-grid">
        {filteredItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default App;
