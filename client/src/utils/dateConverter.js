function formatDate(isoDate) {
  
    const date = new Date(isoDate);
  
    const day = date.getDate().toString().padStart(2, '0')
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();  
    const hours = String(date.getHours()).padStart(2, '0'); 
    const minutes = String(date.getMinutes()).padStart(2, '0'); 
    const seconds = String(date.getSeconds())
    
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

export default formatDate
  

