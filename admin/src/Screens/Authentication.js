import React from 'react'
import Header from '../Components/Header'
import AuthHeader from '../Components/AuthHeader';
import QucikLinksList from '../Components/QucikLinksList';
import QuickLinks from '../Components/QuickLinks';

export default function Authentication() {
    return (
        <div>
            <Header />
            <AuthHeader/>
            <QucikLinksList/>
        </div>
    )
}
