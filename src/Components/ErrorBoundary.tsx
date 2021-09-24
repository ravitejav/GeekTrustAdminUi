import React from "react";
import { logger } from "../Helpers/Logger";
import '../common/styles.css';

export default class ErrorBoundary extends React.Component {

    state = { 
        hasError: false 
    };

    constructor(props: any) {
      super(props);
    }
  
    static getDerivedStateFromError(error: any) {
      return { hasError: true };
    }
  
    componentDidCatch(error: any, errorInfo: any) {
      logger(errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return (
            <div className="error center">
                Something went wrong.
            </div>
        );
      }
  
      return this.props.children; 
    }
  }