import React, { useState } from 'react';
import { Modal } from './Modal';
import { Card } from './Card';

function Container(props) {
    const [modalVisibility, setModalVisibility] = useState(false);
    const [postIndex, setPostIndex] = useState(0);
    const [linkDisplay, setLinkDisplay] = useState(false);

    const showModal = (i) => {
        setPostIndex(i);
        setModalVisibility(true);
        toggleScrollLock();
    }

    const closeModal = () => {
        setModalVisibility(false);
        toggleScrollLock();
        setLinkDisplay(false);
    }

    const toggleScrollLock = () => {
        document.querySelector('html').classList.toggle('scroll-lock');
    };

    const modalShowLink = () => {
        setLinkDisplay(true);
    }
    
    var cards = [];
    for (let i = 0; i < props.posts.length; i++) {
        cards.push(<Card
            post={props.posts[i]}
            key={i}
            inModal={false}
            showModal={() => {showModal(i)}}
        />);
    }

    return (
        <div className={props.className}>
            <Modal
                isVisible={modalVisibility} //we pass a bool value
                closeModal={closeModal} //we pass a reference to a function
                acceptStatus={1} //can accept as a client
                showLink={modalShowLink}
                modalContent={<Card
                    post={props.posts[postIndex]}
                    inModal={true}
                    showModal={() => {}}
                    showLink={linkDisplay}
                />}
            />
			{cards}
        </div>
    )
}

export default Container;
