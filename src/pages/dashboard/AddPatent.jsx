import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePatents } from '../../context/PatentContext';
import { CloudUpload, Trash2, XCircle, FileText, Image as ImageIcon } from 'lucide-react';
import './AddPatent.css';

export default function AddPatent() {
  const navigate = useNavigate();
  const { addPatent } = usePatents();
  const fileInputRef = useRef(null);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Technologie'
  });
  
  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (newFiles) => {
    const fileArray = Array.from(newFiles).map(file => ({
      name: file.name,
      size: (file.size / 1024 / 1024).toFixed(2) + ' MB',
      type: file.type
    }));
    setFiles([...files, ...fileArray]);
    
    // Auto-fill title if empty
    if (!formData.title && fileArray.length > 0) {
      setFormData(prev => ({ ...prev, title: fileArray[0].name.split('.')[0] }));
    }
  };

  const removeFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, we would upload files here
    addPatent({
      ...formData,
      files: files
    });
    navigate('/dashboard/my-patents');
  };

  return (
    <div className="add-patent-container">
      {/* Header Background */}
      <div className="profile-header-bg">
        <div className="header-overlay"></div>
        <div className="header-content">
          <div className="date-time">
            <span>{new Date().toLocaleDateString()}</span>
            <span>{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
          </div>
        </div>
      </div>

      {/* Upload Card */}
      <div className="upload-card">
        <div className="upload-header">
          <h2>Upload</h2>
        </div>

        <div 
          className={`drop-zone ${dragActive ? 'active' : ''}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current.click()}
        >
          <input 
            ref={fileInputRef}
            type="file" 
            multiple 
            onChange={handleChange} 
            className="file-input" 
            style={{display: 'none'}}
          />
          <div className="upload-icon">
            <CloudUpload size={48} color="#5e72e4" />
          </div>
          <h3>Drag & drop files or <span className="browse-link">Browse</span></h3>
          <p className="support-text">Supported formats: JPEG, PNG, PDF, Word, PPT</p>
        </div>

        <div className="upload-form">
          <div className="input-group">
            <label>Titre du brevet</label>
            <input 
              type="text" 
              placeholder="Titre du document..." 
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
          </div>
          
          <div className="input-group">
            <label>Description</label>
            <textarea 
              placeholder="Description courte..." 
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
          </div>
        </div>

        <div className="files-list">
          <h4>Uploaded</h4>
          {files.length === 0 && <p className="no-files">Aucun fichier sélectionné</p>}
          
          {files.map((file, index) => (
            <div key={index} className="file-item">
              <div className="file-info">
                {file.type.includes('image') ? <ImageIcon size={16} /> : <FileText size={16} />}
                <span>{file.name}</span>
              </div>
              <button onClick={(e) => { e.stopPropagation(); removeFile(index); }} className="btn-delete">
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>

        <button className="btn-upload-submit" onClick={handleSubmit}>
          UPLOAD FILES
        </button>
      </div>
    </div>
  );
}
