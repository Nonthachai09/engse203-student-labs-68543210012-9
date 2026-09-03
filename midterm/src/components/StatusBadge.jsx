function StatusBadge({ status }) {
  const statusMap = {
    pending: 'รอดำเนินการ',
    'in-progress': 'กำลังดำเนินการ',
    completed: 'เสร็จสิ้น',
  };

  if (!statusMap[status]) {
    return <span className="status-unknown">ไม่ทราบสถานะ</span>;
  }

  return <span className="badge">{statusMap[status]}</span>;
}

export default StatusBadge;