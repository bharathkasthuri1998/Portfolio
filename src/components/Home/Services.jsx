import React from 'react'
import { servicesData } from '../../data'

const Services = () => {
    return (
        <div className='bg_services'>
            <div className='container services__sec'>
                <div className='row'>
                    <div className='services__main'>
                        <p className='txt__12'>SERVICES</p>
                        <h3 className='txt__36'>Specialized in</h3>
                    </div>
                    {servicesData.map((item, index) => (
                        <div className={`col-md-4 services__card  ${index === 0 ? '' : 'margin_class'}`}>
                            <div>
                                <img src={item.img} alt="" className='mb-2' />
                                <h3 className='txt__16__500'>{item.Title}</h3>
                                <p className='txt__14'>{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services