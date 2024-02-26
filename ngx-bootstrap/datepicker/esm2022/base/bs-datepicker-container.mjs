import { Subscription } from 'rxjs';
export class BsDatepickerAbstractComponent {
    constructor() {
        this.containerClass = '';
        this.customRanges = [];
        this.chosenRange = [];
        this._daysCalendarSub = new Subscription();
        this.selectedTimeSub = new Subscription();
    }
    set minDate(value) {
        this._effects?.setMinDate(value);
    }
    set maxDate(value) {
        this._effects?.setMaxDate(value);
    }
    set daysDisabled(value) {
        this._effects?.setDaysDisabled(value);
    }
    set datesDisabled(value) {
        this._effects?.setDatesDisabled(value);
    }
    set datesEnabled(value) {
        this._effects?.setDatesEnabled(value);
    }
    set isDisabled(value) {
        this._effects?.setDisabled(value);
    }
    set dateCustomClasses(value) {
        this._effects?.setDateCustomClasses(value);
    }
    set dateTooltipTexts(value) {
        this._effects?.setDateTooltipTexts(value);
    }
    set daysCalendar$(value) {
        this._daysCalendar$ = value;
        this._daysCalendarSub.unsubscribe();
        this._daysCalendarSub.add(this._daysCalendar$.subscribe(value => {
            this.multipleCalendars = !!value && value.length > 1;
        }));
    }
    get daysCalendar$() {
        return this._daysCalendar$;
    }
    // todo: valorkin fix
    // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
    setViewMode(event) { }
    // eslint-disable-next-line
    navigateTo(event) { }
    // eslint-disable-next-line
    dayHoverHandler(event) { }
    // eslint-disable-next-line
    weekHoverHandler(event) { }
    // eslint-disable-next-line
    monthHoverHandler(event) { }
    // eslint-disable-next-line
    yearHoverHandler(event) { }
    // eslint-disable-next-line
    timeSelectHandler(date, index) { }
    // eslint-disable-next-line
    daySelectHandler(day) { }
    // eslint-disable-next-line
    monthSelectHandler(event) { }
    // eslint-disable-next-line
    yearSelectHandler(event) { }
    // eslint-disable-next-line
    setRangeOnCalendar(dates) { }
    // eslint-disable-next-line
    setToday() { }
    // eslint-disable-next-line
    clearDate() { }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _stopPropagation(event) {
        event.stopPropagation();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci1jb250YWluZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZGF0ZXBpY2tlci9iYXNlL2JzLWRhdGVwaWNrZXItY29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFnQmhELE1BQU0sT0FBZ0IsNkJBQTZCO0lBQW5EO1FBQ0UsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFVcEIsaUJBQVksR0FBb0IsRUFBRSxDQUFDO1FBRW5DLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBMkN6QixxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBZXRDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQThDdkMsQ0FBQztJQWpHQyxJQUFJLE9BQU8sQ0FBQyxLQUFxQjtRQUMvQixJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsSUFBSSxPQUFPLENBQUMsS0FBcUI7UUFDL0IsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNELElBQUksWUFBWSxDQUFDLEtBQXlCO1FBQ3hDLElBQUksQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxJQUFJLGFBQWEsQ0FBQyxLQUF1QjtRQUN2QyxJQUFJLENBQUMsUUFBUSxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxJQUFJLFlBQVksQ0FBQyxLQUF1QjtRQUN0QyxJQUFJLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsSUFBSSxVQUFVLENBQUMsS0FBd0I7UUFDckMsSUFBSSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELElBQUksaUJBQWlCLENBQUMsS0FBOEM7UUFDbEUsSUFBSSxDQUFDLFFBQVEsRUFBRSxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsSUFBSSxnQkFBZ0IsQ0FBQyxLQUE0QztRQUMvRCxJQUFJLENBQUMsUUFBUSxFQUFFLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFVRCxJQUFJLGFBQWEsQ0FBQyxLQUFvRDtRQUNwRSxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM5RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBS0QscUJBQXFCO0lBQ3JCLGtHQUFrRztJQUNsRyxXQUFXLENBQUMsS0FBMkIsSUFBUyxDQUFDO0lBRWpELDJCQUEyQjtJQUMzQixVQUFVLENBQUMsS0FBd0IsSUFBUyxDQUFDO0lBRTdDLDJCQUEyQjtJQUMzQixlQUFlLENBQUMsS0FBcUIsSUFBUyxDQUFDO0lBRS9DLDJCQUEyQjtJQUMzQixnQkFBZ0IsQ0FBQyxLQUFvQixJQUFTLENBQUM7SUFFL0MsMkJBQTJCO0lBQzNCLGlCQUFpQixDQUFDLEtBQXFCLElBQVMsQ0FBQztJQUVqRCwyQkFBMkI7SUFDM0IsZ0JBQWdCLENBQUMsS0FBcUIsSUFBUyxDQUFDO0lBRWhELDJCQUEyQjtJQUMzQixpQkFBaUIsQ0FBQyxJQUFVLEVBQUUsS0FBYSxJQUFTLENBQUM7SUFFckQsMkJBQTJCO0lBQzNCLGdCQUFnQixDQUFDLEdBQWlCLElBQVMsQ0FBQztJQUU1QywyQkFBMkI7SUFDM0Isa0JBQWtCLENBQUMsS0FBNEIsSUFBUyxDQUFDO0lBRXpELDJCQUEyQjtJQUMzQixpQkFBaUIsQ0FBQyxLQUE0QixJQUFTLENBQUM7SUFFeEQsMkJBQTJCO0lBQzNCLGtCQUFrQixDQUFDLEtBQW9CLElBQVMsQ0FBQztJQUVqRCwyQkFBMkI7SUFDM0IsUUFBUSxLQUFVLENBQUM7SUFFbkIsMkJBQTJCO0lBQzNCLFNBQVMsS0FBVSxDQUFDO0lBRWxCLDhEQUE4RDtJQUNoRSxnQkFBZ0IsQ0FBQyxLQUFVO1FBQ3pCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMxQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkYXRlcGlja2VyIGNvbnRhaW5lciBjb21wb25lbnRcbmltcG9ydCB7IEJzQ3VzdG9tRGF0ZXMgfSBmcm9tICcuLi90aGVtZXMvYnMvYnMtY3VzdG9tLWRhdGVzLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckVmZmVjdHMgfSBmcm9tICcuLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlLFxuICBCc05hdmlnYXRpb25FdmVudCxcbiAgQ2FsZW5kYXJDZWxsVmlld01vZGVsLFxuICBDZWxsSG92ZXJFdmVudCxcbiAgRGF0ZXBpY2tlclJlbmRlck9wdGlvbnMsXG4gIERhdGVwaWNrZXJEYXRlQ3VzdG9tQ2xhc3NlcyxcbiAgRGF0ZXBpY2tlckRhdGVUb29sdGlwVGV4dCxcbiAgRGF5c0NhbGVuZGFyVmlld01vZGVsLFxuICBEYXlWaWV3TW9kZWwsXG4gIE1vbnRoc0NhbGVuZGFyVmlld01vZGVsLFxuICBXZWVrVmlld01vZGVsLFxuICBZZWFyc0NhbGVuZGFyVmlld01vZGVsXG59IGZyb20gJy4uL21vZGVscyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCc0RhdGVwaWNrZXJBYnN0cmFjdENvbXBvbmVudCB7XG4gIGNvbnRhaW5lckNsYXNzID0gJyc7XG4gIGlzT3RoZXJNb250aHNBY3RpdmU/OiBib29sZWFuO1xuICBzaG93VG9kYXlCdG4/OiBib29sZWFuO1xuICB0b2RheUJ0bkxibD86IHN0cmluZztcbiAgdG9kYXlQb3M/OiBzdHJpbmc7XG4gIHNob3dDbGVhckJ0bj86IGJvb2xlYW47XG4gIGNsZWFyQnRuTGJsPzogc3RyaW5nO1xuICBjbGVhclBvcz86IHN0cmluZztcblxuICBfZWZmZWN0cz86IEJzRGF0ZXBpY2tlckVmZmVjdHM7XG4gIGN1c3RvbVJhbmdlczogQnNDdXN0b21EYXRlc1tdID0gW107XG4gIGN1c3RvbVJhbmdlQnRuTGJsPzogc3RyaW5nO1xuICBjaG9zZW5SYW5nZTogRGF0ZVtdID0gW107XG5cbiAgbXVsdGlwbGVDYWxlbmRhcnM/OiBib29sZWFuO1xuXG4gIGlzUmFuZ2VQaWNrZXI/OiBib29sZWFuO1xuICB3aXRoVGltZXBpY2tlcj86IGJvb2xlYW47XG5cbiAgc2V0IG1pbkRhdGUodmFsdWU6IERhdGV8dW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZWZmZWN0cz8uc2V0TWluRGF0ZSh2YWx1ZSk7XG4gIH1cblxuICBzZXQgbWF4RGF0ZSh2YWx1ZTogRGF0ZXx1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lZmZlY3RzPy5zZXRNYXhEYXRlKHZhbHVlKTtcbiAgfVxuICBzZXQgZGF5c0Rpc2FibGVkKHZhbHVlOiBudW1iZXJbXXx1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lZmZlY3RzPy5zZXREYXlzRGlzYWJsZWQodmFsdWUpO1xuICB9XG4gIHNldCBkYXRlc0Rpc2FibGVkKHZhbHVlOiBEYXRlW118dW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZWZmZWN0cz8uc2V0RGF0ZXNEaXNhYmxlZCh2YWx1ZSk7XG4gIH1cblxuICBzZXQgZGF0ZXNFbmFibGVkKHZhbHVlOiBEYXRlW118dW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZWZmZWN0cz8uc2V0RGF0ZXNFbmFibGVkKHZhbHVlKTtcbiAgfVxuXG4gIHNldCBpc0Rpc2FibGVkKHZhbHVlOiBib29sZWFufHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2VmZmVjdHM/LnNldERpc2FibGVkKHZhbHVlKTtcbiAgfVxuXG4gIHNldCBkYXRlQ3VzdG9tQ2xhc3Nlcyh2YWx1ZTogRGF0ZXBpY2tlckRhdGVDdXN0b21DbGFzc2VzW118dW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZWZmZWN0cz8uc2V0RGF0ZUN1c3RvbUNsYXNzZXModmFsdWUpO1xuICB9XG5cbiAgc2V0IGRhdGVUb29sdGlwVGV4dHModmFsdWU6IERhdGVwaWNrZXJEYXRlVG9vbHRpcFRleHRbXXx1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lZmZlY3RzPy5zZXREYXRlVG9vbHRpcFRleHRzKHZhbHVlKTtcbiAgfVxuXG4gIHZpZXdNb2RlPzogT2JzZXJ2YWJsZTxCc0RhdGVwaWNrZXJWaWV3TW9kZXx1bmRlZmluZWQ+O1xuICBtb250aHNDYWxlbmRhcj86IE9ic2VydmFibGU8TW9udGhzQ2FsZW5kYXJWaWV3TW9kZWxbXXx1bmRlZmluZWQ+O1xuICB5ZWFyc0NhbGVuZGFyPzogT2JzZXJ2YWJsZTxZZWFyc0NhbGVuZGFyVmlld01vZGVsW118dW5kZWZpbmVkPjtcbiAgb3B0aW9ucyQhOiBPYnNlcnZhYmxlPERhdGVwaWNrZXJSZW5kZXJPcHRpb25zfHVuZGVmaW5lZD47XG5cbiAgX2RheXNDYWxlbmRhciQhOiBPYnNlcnZhYmxlPERheXNDYWxlbmRhclZpZXdNb2RlbFtdfHVuZGVmaW5lZD47XG4gIF9kYXlzQ2FsZW5kYXJTdWIgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgc2V0IGRheXNDYWxlbmRhciQodmFsdWU6IE9ic2VydmFibGU8RGF5c0NhbGVuZGFyVmlld01vZGVsW118dW5kZWZpbmVkPikge1xuICAgIHRoaXMuX2RheXNDYWxlbmRhciQgPSB2YWx1ZTtcbiAgICB0aGlzLl9kYXlzQ2FsZW5kYXJTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9kYXlzQ2FsZW5kYXJTdWIuYWRkKHRoaXMuX2RheXNDYWxlbmRhciQuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIHRoaXMubXVsdGlwbGVDYWxlbmRhcnMgPSAhIXZhbHVlICYmIHZhbHVlLmxlbmd0aCA+IDE7XG4gICAgfSkpO1xuICB9XG5cbiAgZ2V0IGRheXNDYWxlbmRhciQoKTogT2JzZXJ2YWJsZTxEYXlzQ2FsZW5kYXJWaWV3TW9kZWxbXXx1bmRlZmluZWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZGF5c0NhbGVuZGFyJDtcbiAgfVxuXG4gIHNlbGVjdGVkVGltZT86IE9ic2VydmFibGU8RGF0ZVtdfHVuZGVmaW5lZD47XG4gIHNlbGVjdGVkVGltZVN1YiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICAvLyB0b2RvOiB2YWxvcmtpbiBmaXhcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyxAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb25cbiAgc2V0Vmlld01vZGUoZXZlbnQ6IEJzRGF0ZXBpY2tlclZpZXdNb2RlKTogdm9pZCB7fVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBuYXZpZ2F0ZVRvKGV2ZW50OiBCc05hdmlnYXRpb25FdmVudCk6IHZvaWQge31cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgZGF5SG92ZXJIYW5kbGVyKGV2ZW50OiBDZWxsSG92ZXJFdmVudCk6IHZvaWQge31cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgd2Vla0hvdmVySGFuZGxlcihldmVudDogV2Vla1ZpZXdNb2RlbCk6IHZvaWQge31cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgbW9udGhIb3ZlckhhbmRsZXIoZXZlbnQ6IENlbGxIb3ZlckV2ZW50KTogdm9pZCB7fVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICB5ZWFySG92ZXJIYW5kbGVyKGV2ZW50OiBDZWxsSG92ZXJFdmVudCk6IHZvaWQge31cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgdGltZVNlbGVjdEhhbmRsZXIoZGF0ZTogRGF0ZSwgaW5kZXg6IG51bWJlcik6IHZvaWQge31cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgZGF5U2VsZWN0SGFuZGxlcihkYXk6IERheVZpZXdNb2RlbCk6IHZvaWQge31cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgbW9udGhTZWxlY3RIYW5kbGVyKGV2ZW50OiBDYWxlbmRhckNlbGxWaWV3TW9kZWwpOiB2b2lkIHt9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIHllYXJTZWxlY3RIYW5kbGVyKGV2ZW50OiBDYWxlbmRhckNlbGxWaWV3TW9kZWwpOiB2b2lkIHt9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIHNldFJhbmdlT25DYWxlbmRhcihkYXRlczogQnNDdXN0b21EYXRlcyk6IHZvaWQge31cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgc2V0VG9kYXkoKTogdm9pZCB7fVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBjbGVhckRhdGUoKTogdm9pZCB7fVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgX3N0b3BQcm9wYWdhdGlvbihldmVudDogYW55KTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cbiJdfQ==