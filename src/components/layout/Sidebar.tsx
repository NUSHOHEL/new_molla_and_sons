import { FaShop } from 'react-icons/fa6';
import { FaAngleDown } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
function Sidebar() {
  const sidebarItems = [
    { title: 'Parties', link: '/parties' },
    {
      title: 'Products',
      link: '/products',
      subItems: [
        { title: 'New Product', link: '/product/new-product' },
        { title: 'Units', link: '/product/units' },
        { title: 'Low Stock', link: '/product/low-stock' },
        { title: 'Stock Adjustment', link: '/product/stock-adjustment' },
      ],
    },
    {
      title: 'Sales',
      link: '/sales',
      subItems: [
        { title: 'New Sales', link: '/sales/new-sales' },
        { title: 'Sales return', link: '/sales/sales-return' },
        { title: ' Payment In', link: '/Sales/payment-in' },
      ],
    },
    {
      title: 'Purchase',
      link: '/purchase',
      subItems: [
        { title: 'New Purchase', link: '/purchase/new-purchase' },
        { title: 'Purchase Return', link: '/purchase/purchase-return' },
        { title: 'Payment Out', link: '/purchase/payment-out' },
      ],
    },
    {
      title: 'Expenses',
      link: '/expenses',
      subItems: [
        { title: 'Add expense', link: '/expenses/add-expenses' },
        { title: 'expense category', link: '/expenses/expenses-category' },
      ],
    },
    { title: 'Due List', link: '/due-list' },
    { title: 'Cash Adjustment', link: '/cash-adjustment' },
    {
      title: 'Utilities',
      link: '/utilities',
      subItemss: [
        { title: 'Export Items', link: '/utilities/export-item' },
        { title: 'Export Parties', link: '/utilities/export-parties' },
        { title: 'Reset Account', link: '/utilities/reset-account' },
      ],
    },
    { title: 'Reports', link: '/reports' },
    { title: 'Settings', link: '/settings' },
  ];
  return (
    <div className="max-w-56 bg-regal-blue pt-7 h-screen text-center">
      <div className="flex flex-col items-center mx-4 leading-10 border-dashed border-b border-white cursor-pointer ">
        <FaShop className="size-10 bg-white p-2 rounded-full" />
        <h1 className="text-white text-2xl font-bold text-[16px] flex items-center gap-2 ">
          New Molla & Sons <FaAngleDown className="size-4" />
        </h1>
      </div>
      <nav className='flex flex-col gap-4' >
        {sidebarItems.map((item, index) => (
          <NavLink to={item.link} end>
            {item.title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
