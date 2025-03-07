import React from 'react'


export default function FormSelectFile(){
    const inputFile = React.useRef()
    const selectMaxNumFiles = React.useRef()
    const selectMaxsize = React.useRef()


    let maxNumfile = [1,2,3,4,5]
    let  maxFilesizes = [50,100,200,500,1000]


    const onClickButton = () => {
        let maxNumFiles = selectMaxNumFiles.current.value
        let maxSize = selectMaxsize.current.value
        if(inputFile.current.files.length > maxNumFiles) {
        alert(`เลือกได้ไม่เกิน ${maxNumFiles} ไฟล์ `)
        return
  }
     for (let f of inputFile.current.files) {
     if (f.size > maxSize * 1000) {
      alert(`ขนาดของแต่ละไฟล์ต้องไม่เกิน ${maxSize}`)
     return
         }
        }
     alert('Files OK')
    }
    return(
        <div className="mt-4 mx-auto p-3 rounded" style={{width:'400px',background:'#cee'}}>
            <form>
                <div className="form-group mb-3">
                    <label htmlFor="maxNumFile" className='form-label'>จำนวนไฟล์สูงสุด</label>
                    <select id="maxNumFile" className="form-select form-select-sm" ref={selectMaxNumFiles}>
                        {
                        maxNumfile.map(i =>{
                            return<option value={i}>{i}</option>
                        })
                    }
                    </select>
                </div>
                <div className='form-group mb-3'>
                    <label htmlFor="maxFileSizes" className="form-label">ขนาดไฟล์สูงสุด (KB)</label>
                    <select id="maxFileSizes" className="form-select form-select-sm" ref={selectMaxsize}>
                    {
                        maxFilesizes.map(i => {
                    return <option value={i}>{i}</option>
                    })
                    }
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="file" className="form-label">เลือกไฟล์</label>
                    <input type="file" id="file" accept="image/*"
                    className="form-control form-control-sm" ref={inputFile} multiple/>
                </div>
                <div className="text-center mt-4">
                    <button type="button" className="btn btn-sm btn-primary px-4"
                    onClick={onClickButton}>OK
                    </button>
             </div>
            </form>
        </div>
    )
}    