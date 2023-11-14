import { useState } from 'react';
import { TiShoppingCart } from 'react-icons/ti'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { montPrice } from '@/styles/fontes/Fontes';

function CanvaBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <TiShoppingCart className="text-[25px]" onClick={handleShow} />
      </div>
      <div>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton className="bg-[#0F52BA]">
            <Offcanvas.Title>
              <h1 className={` ${montPrice.className} text-white text-[35px] `}>
                Carrinho de compras
              </h1>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="bg-[#0F52BA] m-0 p-0">
            <div className='min-h-[68vh]'>
              products
            </div>
            <div className={`flex justify-between pl-10 pr-10 min-h-[5vh] mb-[2vh] ${montPrice.className} text-white text-[28px]`}>
              <div>
                Total:
              </div>
              <div>
                R$0,00
              </div>
            </div>
            <div className={`flex justify-center items-center bg-black w-[100%] h-[108px] ${montPrice.className} text-white text-[28px]`}>
              Finalizar Compra
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div >
    </>
  );
}

export default CanvaBar;