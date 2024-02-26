const dex = 10;
const hoursPerDay = 24;
const hoursPerDayHalf = 12;
const minutesPerHour = 60;
const secondsPerMinute = 60;
export function isValidDate(value) {
    if (!value) {
        return false;
    }
    if (value instanceof Date && isNaN(value.getHours())) {
        return false;
    }
    if (typeof value === 'string') {
        return isValidDate(new Date(value));
    }
    return true;
}
export function isValidLimit(controls, newDate) {
    if (controls.min && newDate < controls.min) {
        return false;
    }
    if (controls.max && newDate > controls.max) {
        return false;
    }
    return true;
}
export function toNumber(value) {
    if (typeof value === 'undefined') {
        return NaN;
    }
    if (typeof value === 'number') {
        return value;
    }
    return parseInt(value, dex);
}
export function isNumber(value) {
    return !isNaN(toNumber(value));
}
export function parseHours(value, isPM = false) {
    const hour = toNumber(value);
    if (isNaN(hour) ||
        hour < 0 ||
        hour > (isPM ? hoursPerDayHalf : hoursPerDay)) {
        return NaN;
    }
    return hour;
}
export function parseMinutes(value) {
    const minute = toNumber(value);
    if (isNaN(minute) || minute < 0 || minute > minutesPerHour) {
        return NaN;
    }
    return minute;
}
export function parseSeconds(value) {
    const seconds = toNumber(value);
    if (isNaN(seconds) || seconds < 0 || seconds > secondsPerMinute) {
        return NaN;
    }
    return seconds;
}
export function parseTime(value) {
    if (typeof value === 'string') {
        return new Date(value);
    }
    return value;
}
export function changeTime(value, diff) {
    if (!value) {
        return changeTime(createDate(new Date(), 0, 0, 0), diff);
    }
    if (!diff) {
        return value;
    }
    let hour = value.getHours();
    let minutes = value.getMinutes();
    let seconds = value.getSeconds();
    if (diff.hour) {
        hour = hour + toNumber(diff.hour);
    }
    if (diff.minute) {
        minutes = minutes + toNumber(diff.minute);
    }
    if (diff.seconds) {
        seconds = seconds + toNumber(diff.seconds);
    }
    return createDate(value, hour, minutes, seconds);
}
export function setTime(value, opts) {
    let hour = parseHours(opts.hour);
    const minute = parseMinutes(opts.minute);
    const seconds = parseSeconds(opts.seconds) || 0;
    if (opts.isPM && hour !== 12) {
        hour += hoursPerDayHalf;
    }
    if (!value) {
        if (!isNaN(hour) && !isNaN(minute)) {
            return createDate(new Date(), hour, minute, seconds);
        }
        return value;
    }
    if (isNaN(hour) || isNaN(minute)) {
        return value;
    }
    return createDate(value, hour, minute, seconds);
}
export function createDate(value, hours, minutes, seconds) {
    const newValue = new Date(value.getFullYear(), value.getMonth(), value.getDate(), hours, minutes, seconds, value.getMilliseconds());
    // #3139 ensure date part remains unchanged
    newValue.setFullYear(value.getFullYear());
    newValue.setMonth(value.getMonth());
    newValue.setDate(value.getDate());
    return newValue;
}
export function padNumber(value) {
    const _value = value.toString();
    if (_value.length > 1) {
        return _value;
    }
    return `0${_value}`;
}
export function isHourInputValid(hours, isPM) {
    return !isNaN(parseHours(hours, isPM));
}
export function isMinuteInputValid(minutes) {
    return !isNaN(parseMinutes(minutes));
}
export function isSecondInputValid(seconds) {
    return !isNaN(parseSeconds(seconds));
}
export function isInputLimitValid(diff, max, min) {
    const newDate = setTime(new Date(), diff);
    if (!newDate) {
        return false;
    }
    if (max && newDate > max) {
        return false;
    }
    if (min && newDate < min) {
        return false;
    }
    return true;
}
export function isOneOfDatesEmpty(hours, minutes, seconds) {
    return hours.length === 0 || minutes.length === 0 || seconds.length === 0;
}
export function isInputValid(hours, minutes = '0', seconds = '0', isPM) {
    return isHourInputValid(hours, isPM)
        && isMinuteInputValid(minutes)
        && isSecondInputValid(seconds);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci51dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90aW1lcGlja2VyL3RpbWVwaWNrZXIudXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ2YsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ3ZCLE1BQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQztBQUMzQixNQUFNLGNBQWMsR0FBRyxFQUFFLENBQUM7QUFDMUIsTUFBTSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7QUFFNUIsTUFBTSxVQUFVLFdBQVcsQ0FBQyxLQUFxQjtJQUMvQyxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1YsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksS0FBSyxZQUFZLElBQUksSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUU7UUFDcEQsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQzdCLE9BQU8sV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDckM7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFFRCxNQUFNLFVBQVUsWUFBWSxDQUFDLFFBQWtDLEVBQUUsT0FBYTtJQUM1RSxJQUFJLFFBQVEsQ0FBQyxHQUFHLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUU7UUFDMUMsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksUUFBUSxDQUFDLEdBQUcsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRTtRQUMxQyxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBRUQsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUF1QjtJQUM5QyxJQUFJLE9BQU8sS0FBSyxL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QUFDO0tBQ2Q7SUFFRCxJQUFJLEdBQUcsSUFBSSxPQUFPLEdBQUcsR0FBRyxFQUFFO1FBQ3hCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLEdBQUcsSUFBSSxPQUFPLEdBQUcsR0FBRyxFQUFFO1FBQ3hCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFFRCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsS0FBYSxFQUFFLE9BQWUsRUFBRSxPQUFlO0lBQy9FLE9BQU8sS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7QUFDNUUsQ0FBQztBQUVELE1BQU0sVUFBVSxZQUFZLENBQzFCLEtBQWEsRUFDYixPQUFPLEdBQUcsR0FBRyxFQUNiLE9BQU8sR0FBRyxHQUFHLEVBQ2IsSUFBYTtJQUViLE9BQU8sZ0JBQWdCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztXQUMvQixrQkFBa0IsQ0FBQyxPQUFPLENBQUM7V0FDM0Isa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpbWUsIFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZSB9IGZyb20gJy4vdGltZXBpY2tlci5tb2RlbHMnO1xuXG5jb25zdCBkZXggPSAxMDtcbmNvbnN0IGhvdXJzUGVyRGF5ID0gMjQ7XG5jb25zdCBob3Vyc1BlckRheUhhbGYgPSAxMjtcbmNvbnN0IG1pbnV0ZXNQZXJIb3VyID0gNjA7XG5jb25zdCBzZWNvbmRzUGVyTWludXRlID0gNjA7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkRGF0ZSh2YWx1ZT86IHN0cmluZyB8IERhdGUpOiBib29sZWFuIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUgJiYgaXNOYU4odmFsdWUuZ2V0SG91cnMoKSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBpc1ZhbGlkRGF0ZShuZXcgRGF0ZSh2YWx1ZSkpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkTGltaXQoY29udHJvbHM6IFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZSwgbmV3RGF0ZTogRGF0ZSk6IGJvb2xlYW4ge1xuICBpZiAoY29udHJvbHMubWluICYmIG5ld0RhdGUgPCBjb250cm9scy5taW4pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoY29udHJvbHMubWF4ICYmIG5ld0RhdGUgPiBjb250cm9scy5tYXgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlPzogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIGRleCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcih2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogdmFsdWUgaXMgbnVtYmVyIHtcbiAgcmV0dXJuICFpc05hTih0b051bWJlcih2YWx1ZSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VIb3VycyhcbiAgdmFsdWU/OiBzdHJpbmcgfCBudW1iZXIsXG4gIGlzUE0gPSBmYWxzZVxuKTogbnVtYmVyIHtcbiAgY29uc3QgaG91ciA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgaWYgKFxuICAgIGlzTmFOKGhvdXIpIHx8XG4gICAgaG91ciA8IDAgfHxcbiAgICBob3VyID4gKGlzUE0gPyBob3Vyc1BlckRheUhhbGYgOiBob3Vyc1BlckRheSlcbiAgKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBob3VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VNaW51dGVzKHZhbHVlPzogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgbWludXRlID0gdG9OdW1iZXIodmFsdWUpO1xuICBpZiAoaXNOYU4obWludXRlKSB8fCBtaW51dGUgPCAwIHx8IG1pbnV0ZSA+IG1pbnV0ZXNQZXJIb3VyKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBtaW51dGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVNlY29uZHModmFsdWU/OiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXIge1xuICBjb25zdCBzZWNvbmRzID0gdG9OdW1iZXIodmFsdWUpO1xuICBpZiAoaXNOYU4oc2Vjb25kcykgfHwgc2Vjb25kcyA8IDAgfHwgc2Vjb25kcyA+IHNlY29uZHNQZXJNaW51dGUpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIHNlY29uZHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRpbWUodmFsdWU/OiBzdHJpbmcgfCBEYXRlKTogRGF0ZSB8IHVuZGVmaW5lZCB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRpbWUodmFsdWU/OiBEYXRlLCBkaWZmPzogVGltZSk6IERhdGUge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIGNoYW5nZVRpbWUoY3JlYXRlRGF0ZShuZXcgRGF0ZSgpLCAwLCAwLCAwKSwgZGlmZik7XG4gIH1cblxuICBpZiAoIWRpZmYpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBsZXQgaG91ciA9IHZhbHVlLmdldEhvdXJzKCk7XG4gIGxldCBtaW51dGVzID0gdmFsdWUuZ2V0TWludXRlcygpO1xuICBsZXQgc2Vjb25kcyA9IHZhbHVlLmdldFNlY29uZHMoKTtcblxuICBpZiAoZGlmZi5ob3VyKSB7XG4gICAgaG91ciA9IGhvdXIgKyB0b051bWJlcihkaWZmLmhvdXIpO1xuICB9XG5cbiAgaWYgKGRpZmYubWludXRlKSB7XG4gICAgbWludXRlcyA9IG1pbnV0ZXMgKyB0b051bWJlcihkaWZmLm1pbnV0ZSk7XG4gIH1cblxuICBpZiAoZGlmZi5zZWNvbmRzKSB7XG4gICAgc2Vjb25kcyA9IHNlY29uZHMgKyB0b051bWJlcihkaWZmLnNlY29uZHMpO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZURhdGUodmFsdWUsIGhvdXIsIG1pbnV0ZXMsIHNlY29uZHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VGltZSh2YWx1ZTogRGF0ZSB8IHVuZGVmaW5lZCwgb3B0czogVGltZSk6IERhdGUgfCB1bmRlZmluZWQge1xuICBsZXQgaG91ciA9IHBhcnNlSG91cnMob3B0cy5ob3VyKTtcbiAgY29uc3QgbWludXRlID0gcGFyc2VNaW51dGVzKG9wdHMubWludXRlKTtcbiAgY29uc3Qgc2Vjb25kcyA9IHBhcnNlU2Vjb25kcyhvcHRzLnNlY29uZHMpIHx8IDA7XG5cbiAgaWYgKG9wdHMuaXNQTSAmJiBob3VyICE9PSAxMikge1xuICAgIGhvdXIgKz0gaG91cnNQZXJEYXlIYWxmO1xuICB9XG5cbiAgaWYgKCF2YWx1ZSkge1xuICAgIGlmICghaXNOYU4oaG91cikgJiYgIWlzTmFOKG1pbnV0ZSkpIHtcbiAgICAgIHJldHVybiBjcmVhdGVEYXRlKG5ldyBEYXRlKCksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgaWYgKGlzTmFOKGhvdXIpIHx8IGlzTmFOKG1pbnV0ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlRGF0ZSh2YWx1ZSwgaG91ciwgbWludXRlLCBzZWNvbmRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURhdGUoXG4gIHZhbHVlOiBEYXRlLFxuICBob3VyczogbnVtYmVyLFxuICBtaW51dGVzOiBudW1iZXIsXG4gIHNlY29uZHM6IG51bWJlclxuKTogRGF0ZSB7XG4gIGNvbnN0IG5ld1ZhbHVlID0gbmV3IERhdGUoXG4gICAgdmFsdWUuZ2V0RnVsbFllYXIoKSxcbiAgICB2YWx1ZS5nZXRNb250aCgpLFxuICAgIHZhbHVlLmdldERhdGUoKSxcbiAgICBob3VycyxcbiAgICBtaW51dGVzLFxuICAgIHNlY29uZHMsXG4gICAgdmFsdWUuZ2V0TWlsbGlzZWNvbmRzKClcbiAgKTtcbiAgLy8gIzMxMzkgZW5zdXJlIGRhdGUgcGFydCByZW1haW5zIHVuY2hhbmdlZFxuICBuZXdWYWx1ZS5zZXRGdWxsWWVhcih2YWx1ZS5nZXRGdWxsWWVhcigpKTtcbiAgbmV3VmFsdWUuc2V0TW9udGgodmFsdWUuZ2V0TW9udGgoKSk7XG4gIG5ld1ZhbHVlLnNldERhdGUodmFsdWUuZ2V0RGF0ZSgpKTtcblxuICByZXR1cm4gbmV3VmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWROdW1iZXIodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IF92YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gIGlmIChfdmFsdWUubGVuZ3RoID4gMSkge1xuICAgIHJldHVybiBfdmFsdWU7XG4gIH1cblxuICByZXR1cm4gYDAke192YWx1ZX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNIb3VySW5wdXRWYWxpZChob3Vyczogc3RyaW5nLCBpc1BNOiBib29sZWFuKTogYm9vbGVhbiB7XG4gIHJldHVybiAhaXNOYU4ocGFyc2VIb3Vycyhob3VycywgaXNQTSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNaW51dGVJbnB1dFZhbGlkKG1pbnV0ZXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gIWlzTmFOKHBhcnNlTWludXRlcyhtaW51dGVzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NlY29uZElucHV0VmFsaWQoc2Vjb25kczogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiAhaXNOYU4ocGFyc2VTZWNvbmRzKHNlY29uZHMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5wdXRMaW1pdFZhbGlkKGRpZmY6IFRpbWUsIG1heD86IERhdGUsIG1pbj86IERhdGUpOiBib29sZWFuIHtcbiAgY29uc3QgbmV3RGF0ZSA9IHNldFRpbWUobmV3IERhdGUoKSwgZGlmZik7XG5cbiAgaWYgKCFuZXdEYXRlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKG1heCAmJiBuZXdEYXRlID4gbWF4KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKG1pbiAmJiBuZXdEYXRlIDwgbWluKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09uZU9mRGF0ZXNFbXB0eShob3Vyczogc3RyaW5nLCBtaW51dGVzOiBzdHJpbmcsIHNlY29uZHM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gaG91cnMubGVuZ3RoID09PSAwIHx8IG1pbnV0ZXMubGVuZ3RoID09PSAwIHx8IHNlY29uZHMubGVuZ3RoID09PSAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNJbnB1dFZhbGlkKFxuICBob3Vyczogc3RyaW5nLFxuICBtaW51dGVzID0gJzAnLFxuICBzZWNvbmRzID0gJzAnLFxuICBpc1BNOiBib29sZWFuXG4pOiBib29sZWFuIHtcbiAgcmV0dXJuIGlzSG91cklucHV0VmFsaWQoaG91cnMsIGlzUE0pXG4gICAgJiYgaXNNaW51dGVJbnB1dFZhbGlkKG1pbnV0ZXMpXG4gICAgJiYgaXNTZWNvbmRJbnB1dFZhbGlkKHNlY29uZHMpO1xufVxuIl19