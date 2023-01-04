import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Users.css';
import { fetchUsers } from '../../features/users/userSlice';
import Loading from '../../utils/Loading';
import User from './User';
import { Col, Row } from 'antd';
import Error from './Error';


const Users = () => {
    const dispatch = useDispatch()
    // const { users, loading, isError } = useSelector(state => state.user);
    const users = useSelector((state) => state.user);
    console.log(users)
    // const loading = useSelector((state) => state.user);
    // const isError = useSelector((state) => state.user);
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch]);

    return (
        <div>
            {users?.loading && <Loading />}
            {users?.isError && !users.loading && <Error />}
            console.log(users)
            <Row gutter={[16, 16]} >

                {

                    !users?.loading && !users?.isError && users?.users && users?.users?.map((user) => (<User key={user?.id} user={user}></User>))
                }
            </Row>

        </div>
    );
};

export default Users;